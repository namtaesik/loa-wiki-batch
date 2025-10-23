import { Module } from '@nestjs/common';
import { LoaItemsService } from './loa-items.service';
import { LostArkHttpClientModule } from 'src/infrastructure/http/lostark/lostark.http-client.module';

@Module({
  imports: [LostArkHttpClientModule],
  providers: [LoaItemsService]
})
export class LoaItemsModule {}
