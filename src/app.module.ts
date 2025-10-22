import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import * as process from 'process';
import { ApiModule } from './api/api.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BatchModule } from './batch/batch.module';
import BaseConfig from './common/config/base.config';
import { LogModule } from './domain/log/log.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: [`.env.${process.env.NODE_ENV}`],
      load: [BaseConfig],
      expandVariables: true
    }),
    ScheduleModule.forRoot(),
    LogModule,
    ApiModule,
    BatchModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
