import { registerAs } from '@nestjs/config';
import * as process from 'process';

export default registerAs(
  'base',
  (): Record<string, any> => ({
    api: {
      country: process.env.APP_COUNTRY,
      timeZone: process.env.APP_TIME_ZONE,
      key: process.env.API_KEY
    }
  })
);
