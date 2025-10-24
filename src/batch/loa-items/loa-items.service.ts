import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import * as process from 'node:process';
import { LoaItems } from './loa-items.enum';
import { TaskJob } from './job/task/task.job';
import { LostArkHttpClientService } from 'src/infrastructure/http/lostark/lostark.http-client.service';

@Injectable()
export class LoaItemsService {
  constructor(private readonly httpService: LostArkHttpClientService) {}

  @Cron(CronExpression.EVERY_HOUR, { name: LoaItems.LoaItemsJob, timeZone: process.env.TIME_ZONE })
  async test(): Promise<void> {
    const job = new TaskJob(LoaItems.LoaItemsJob, this.httpService);
    await job.exec(true);
  }
}
