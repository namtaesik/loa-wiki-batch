import * as https from 'https';

export const httpsAgent = new https.Agent({
  rejectUnauthorized: false // 인증서 무시
});
