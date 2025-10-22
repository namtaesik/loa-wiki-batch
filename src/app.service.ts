import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getMain() {
    return {
      statusCode: 302,
      url: '/health'
    };
  }

  getHealth() {
    return {
      message: 'OK'
    };
  }
}
