import { Controller, Get, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Redirect()
  getMain() {
    return this.appService.getMain();
  }

  @Get('health')
  getHealth() {
    return this.appService.getHealth();
  }
}
