import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import * as process from 'node:process';
import { Base } from './base.enum';
import { TaskJob } from './job/task/task.job';

@Injectable()
export class BaseService {
  constructor(private readonly httpService: HttpService) {}

  @Cron(CronExpression.EVERY_HOUR, { name: Base.BaseJob, timeZone: process.env.TIME_ZONE })
  async test(): Promise<void> {
    const job = new TaskJob(Base.BaseJob, this.httpService);
    await job.exec();
  }
}
