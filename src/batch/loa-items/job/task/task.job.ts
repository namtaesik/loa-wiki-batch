import { LostArkHttpClientService } from 'src/infrastructure/http/lostark/lostark.http-client.service';
import { InternalServerErrorException } from '@nestjs/common';
import { JobBase } from '../../../../common/batch/job-base';
import { Task } from './task.enum';
import { MarketItemInfo, TaskProcessorRes, TaskReaderRes } from './task.res.dto';
import { MarketsItemsReqList } from 'src/batch/loa-items/job/task/constants';
import { PrismaClient } from 'prisma/client/loawiki';
export class TaskJob extends JobBase<MarketItemInfo[], MarketItemInfo[], void> {
  private readonly client: LostArkHttpClientService;

  constructor(logName: string, client: LostArkHttpClientService) {
    super(logName);
    this.client = client;
  }

  async itemReader(): Promise<MarketItemInfo[]> {
    const resData: MarketItemInfo[] = new Array<MarketItemInfo>();
    for (const req of MarketsItemsReqList) {
      const res: TaskReaderRes = await this.client
        .post(Task.URL, req)
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          throw new InternalServerErrorException(err);
        });
      resData.push(...res.Items);
      const needCallMoreCount = Math.ceil(res.TotalCount / (res.PageNo * res.PageSize));
      if (needCallMoreCount > 1) {
        // 추가 요청 필요
        for (let page = 2; page <= needCallMoreCount; page++) {
          const moreReq = { ...req, PageNo: page };
          const moreRes: TaskReaderRes = await this.client
            .post(Task.URL, moreReq)
            .then((res) => {
              return res.data;
            })
            .catch((err) => {
              throw new InternalServerErrorException(err);
            });
          resData.push(...moreRes.Items);
        }
      }
    }

    await this.saveLog(Task.ItemReader);

    return resData;
  }

  async itemProcessor(item: MarketItemInfo[]): Promise<MarketItemInfo[]> {
    await this.saveLog(Task.ItemProcessor, JSON.stringify(item));

    const returnData: MarketItemInfo[] = item.map((i) => {
      return i;
    });

    return returnData;
  }

  async itemWriter(items: MarketItemInfo[]): Promise<void> {
    const prisma = new PrismaClient();
    items.forEach(async (item) => {
      // DB 아이템 정보 업데이트
      await prisma.items.upsert({
        where: { id: item.Id },
        update: {
          name: item.Name,
          grade: item.Grade,
          icon: item.Icon,
          bundle_count: item.BundleCount,
          trade_remain_cnt: item.TradeRemainCount,
          yday_avg_price: item.YDayAvgPrice,
          recent_price: item.RecentPrice,
          current_min_price: item.CurrentMinPrice
        },
        create: {
          id: item.Id,
          name: item.Name,
          grade: item.Grade,
          icon: item.Icon,
          bundle_count: item.BundleCount,
          trade_remain_cnt: item.TradeRemainCount,
          yday_avg_price: item.YDayAvgPrice,
          recent_price: item.RecentPrice,
          current_min_price: item.CurrentMinPrice
        }
      });
    });
    // DB 히스토리 저장
    await prisma.items_history.createMany({
      data: items.map((item) => ({
        item_id: item.Id,
        yday_avg_price: item.YDayAvgPrice,
        recent_price: item.RecentPrice,
        current_min_price: item.CurrentMinPrice,
        reg_date: new Date()
      }))
    });

    await this.saveLog(Task.ItemWriter, JSON.stringify(items));
  }
}
