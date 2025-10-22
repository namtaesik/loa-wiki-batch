import * as moment from 'moment-timezone';
import { utilities, WinstonModule } from 'nest-winston';
import * as process from 'process';
import * as winston from 'winston';
import * as winstonDaily from 'winston-daily-rotate-file';
import { App } from '../../app.enum';

const momentTimestamp = winston.format((info, opts) => {
  if (opts.tz) info.timestamp = moment().tz(opts.tz).format();

  return info;
});

const winstonLevel = process.env.NODE_ENV === App.Local ? 'silly' : 'http';

const winstonFormat = winston.format.combine(
  momentTimestamp({ tz: process.env.APP_TIME_ZONE }),
  utilities.format.nestLike(process.env.NODE_ENV, { colors: process.env.NODE_ENV === App.Local, prettyPrint: true })
);

export const winstonLogger = WinstonModule.createLogger({
  transports: [
    new winston.transports.Console({
      level: winstonLevel,
      format: winstonFormat
    }),
    new winstonDaily({
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      filename: `%DATE%.log`,
      dirname: './logs/',
      maxFiles: '1d',
      level: winstonLevel,
      format: winstonFormat
    })
  ]
});
