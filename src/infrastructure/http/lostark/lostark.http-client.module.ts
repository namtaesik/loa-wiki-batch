import { HttpModule } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { httpsAgent } from 'src/shared/config/https-agent.config';
import { LostArkHttpClientService } from './lostark.http-client.service';

@Global()
@Module({
  imports: [
    ConfigModule,
    HttpModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        return {
          baseURL: config.get<string>('LOSTARK_API_URL'),
          timeout: config.get<number>('LOSTARK_API_TIMEOUT'),
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${config.get<string>('LOSTARK_API_KEY')}`
          },
          httpsAgent
        };
      }
    })
  ],
  providers: [LostArkHttpClientService],
  exports: [LostArkHttpClientService]
})
export class LostArkHttpClientModule {}
