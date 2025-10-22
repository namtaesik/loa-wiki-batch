import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { BaseV1Controller } from './base-v1.controller';
import { BaseV1Service } from './base-v1.service';

@Module({
  imports: [HttpModule],
  controllers: [BaseV1Controller],
  providers: [BaseV1Service]
})
export class BaseV1Module {}
