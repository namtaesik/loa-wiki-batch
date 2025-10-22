import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { BaseService } from './base.service';

@Module({
  imports: [HttpModule],
  providers: [BaseService]
})
export class BaseModule {}
