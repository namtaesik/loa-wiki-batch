import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { App } from '../../app.enum';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const apiKey = request.headers[App.ApiKey];

    return apiKey === process.env.API_KEY;
  }
}
