import { Injectable, Logger } from '@nestjs/common';
import { Prisma } from 'prisma/client/loawiki';
import { PrismaService } from '../../common/prisma/prisma.service';

@Injectable()
export class LogRepository {
  private readonly logger = new Logger(LogRepository.name);

  constructor(private readonly prisma: PrismaService) {}

  async selectLog() {
    const query = Prisma.sql`select * from log.log`;

    return this.prisma.$queryRaw<any[]>`${query}`;
  }
}
