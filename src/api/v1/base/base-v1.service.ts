import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TaskJob } from '../../../batch/base/job/task/task.job';
import { LogRepository } from '../../../domain/log/log.repository';
import { API } from '../../api.enum';
import { V1 } from '../v1.enum';
import { BaseV1 } from './base-v1.enum';

@Injectable()
export class BaseV1Service {
  private readonly logger = new Logger(BaseV1Service.name);

  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
    private readonly logRepository: LogRepository
  ) {}

  get() {
    this.logger.log(`${API.Path}/${V1.Path}/${BaseV1.Path}`);

    return {
      path: `${API.Path}/${V1.Path}/${BaseV1.Path}`,
      country: this.configService.get<string>('base.api.country'),
      time_zone: this.configService.get<string>('base.api.timeZone')
    };
  }

  async logs() {
    return this.logRepository.selectLog();
  }

  async taskJobRun(logName: string) {
    const job = new TaskJob(logName, this.httpService);
    await job.exec(true);

    return {
      message: API.Success
    };
  }
}
