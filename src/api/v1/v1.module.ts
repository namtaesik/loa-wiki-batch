import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { API } from '../api.enum';
import { BaseV1Module } from './base/base-v1.module';
import { V1 } from './v1.enum';

@Module({
  imports: [
    RouterModule.register([
      {
        path: `${API.Path}/${V1.Path}`,
        children: [BaseV1Module]
      }
    ]),
    BaseV1Module
  ]
})
export class V1Module {}
