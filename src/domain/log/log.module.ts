import { Global, Module } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';
import { LogRepository } from './log.repository';

@Global()
@Module({
  imports: [],
  providers: [PrismaService, LogRepository],
  exports: [LogRepository]
})
export class LogModule {}
