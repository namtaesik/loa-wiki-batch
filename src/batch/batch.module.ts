import { Module } from '@nestjs/common';
import { LoaItemsModule } from './loa-items/loa-items.module';

@Module({
  imports: [LoaItemsModule]
})
export class BatchModule {}
