import { Logger } from '@nestjs/common';
import * as process from 'process';
import { App } from '../../app.enum';
import { Job } from './job.enum';

export abstract class JobBase<TReader, TProcessor, TWriter> {
  protected readonly logger: Logger;
  protected readonly logName: string;
  protected readonly startNow: number;

  protected constructor(logName: string) {
    this.logger = new Logger(this.logName);
    this.logName = logName;
    this.startNow = Date.now();
  }

  public async exec(isDebug = false): Promise<TWriter> {
    if (process.env.NODE_ENV === App.Local && !isDebug) return;

    try {
      await this.saveLog(Job.Start);

      const readerItems = await this.itemReader();
      const processorItems = await this.itemProcessor(readerItems);
      const writerItems = await this.itemWriter(processorItems);

      await this.saveLog(Job.End);

      return writerItems;
    } catch (e) {
      await this.saveLog(Job.Catch, e);
    }
  }

  public abstract itemReader(): Promise<TReader>;

  public abstract itemProcessor(items: TReader): Promise<TProcessor>;

  public abstract itemWriter(items: TProcessor): Promise<TWriter>;

  protected async saveLog(status: string, message?: string) {
    const elapsedTime = `${Date.now() - this.startNow}${Job.MS}`;
    const logMessage = `[${this.logName}][${status}] ${message ?? Job.Message}${elapsedTime ? ` (${elapsedTime})` : ''}`;

    if (status !== Job.Catch) this.logger.verbose(logMessage);
    else this.logger.error(logMessage);
  }
}
