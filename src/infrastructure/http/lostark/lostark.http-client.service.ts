import { HttpService } from '@nestjs/axios';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { HttpClientService } from 'src/infrastructure/http/http-client.service.abstract';

@Injectable()
export class LostArkHttpClientService extends HttpClientService implements OnModuleInit {
  private readonly logger = new Logger(LostArkHttpClientService.name);

  constructor(httpService: HttpService) {
    super(httpService);

    this.client.interceptors.request.use(
      (config) => {
        // (config as any).metadata = { startTime: new Date() };

        // // baseURL과 url 합치기
        // const baseURL = config.baseURL?.replace(/\/$/, '') || '';
        // const url = config.url || '';

        // // url이 절대경로인지 검사
        // const isAbsoluteUrl = /^https?:\/\//i.test(url);

        // // 전체 URL 완성
        // const fullUrl = isAbsoluteUrl ? url : `${baseURL}/${url.replace(/^\//, '')}`;

        return config;
      },
      (error) => {
        this.logger.error('Request error', error);
        return Promise.reject(error);
      }
    );

    this.client.interceptors.response.use(
      async (response) => {
        return response;
      },
      async (error) => {
        return Promise.reject(error);
      }
    );
  }

  async onModuleInit() {
    this.logger.log(`${LostArkHttpClientService.name} initialized`);
  }
}
