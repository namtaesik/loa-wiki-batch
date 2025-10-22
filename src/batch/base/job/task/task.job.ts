import { HttpService } from '@nestjs/axios';
import { InternalServerErrorException } from '@nestjs/common';
import { JobBase } from '../../../../common/batch/job-base';
import { Task } from './task.enum';
import { TaskProcessorRes, TaskReaderRes } from './task.res.dto';

export class TaskJob extends JobBase<TaskReaderRes, TaskProcessorRes[], void> {
  private readonly httpService: HttpService;

  constructor(logName: string, httpService: HttpService) {
    super(logName);
    this.httpService = httpService;
  }

  async itemReader(): Promise<TaskReaderRes> {
    const resData: TaskReaderRes = await this.httpService.axiosRef
      .get(Task.URL)
      .then((res) => {
        return {
          status: res.status,
          data: JSON.stringify(res.data)
        };
      })
      .catch((err) => {
        throw new InternalServerErrorException(err);
      });

    await this.saveLog(Task.ItemReader);

    return resData;
  }

  async itemProcessor(item: TaskReaderRes): Promise<TaskProcessorRes[]> {
    await this.saveLog(Task.ItemProcessor, JSON.stringify(item));

    const returnData: TaskProcessorRes[] = [];
    returnData.push({
      id: 1,
      status: item.status,
      data: item.data
    });

    return returnData;
  }

  async itemWriter(items: TaskProcessorRes[]): Promise<void> {
    await this.saveLog(Task.ItemWriter, items.length.toString());
  }
}
