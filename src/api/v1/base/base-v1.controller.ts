import { Controller, Get, Logger, Post, UseGuards } from '@nestjs/common';
import { ApiKeyGuard } from '../../../common/guard/api-key.guard';
import { API } from '../../api.enum';
import { V1 } from '../v1.enum';
import { BaseV1 } from './base-v1.enum';
import { BaseV1Service } from './base-v1.service';

@Controller(BaseV1.Path)
@UseGuards(ApiKeyGuard)
export class BaseV1Controller {
  private readonly logger = new Logger(BaseV1Controller.name);

  constructor(private readonly baseV1Service: BaseV1Service) {}

  @Get()
  get() {
    this.logger.log(`get: ${API.Path}/${V1.Path}/${BaseV1.Path}`);

    return this.baseV1Service.get();
  }

  @Get(BaseV1.Logs)
  async logs() {
    return this.baseV1Service.logs();
  }

  @Post(BaseV1.TaskJobRun)
  async taskJobRun() {
    return await this.baseV1Service.taskJobRun(BaseV1.TaskJobRun);
  }
}
