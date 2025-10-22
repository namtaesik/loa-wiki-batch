import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { json } from 'express';
import * as process from 'process';
import { AppModule } from './app.module';
import { winstonLogger } from './common/config/winston.config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // CORS 설정
  app.enableCors();

  // 헤더 정보 설정
  app.disable('x-powered-by');

  // JSON 크기 제한
  app.use(json({ limit: '20mb' }));

  // Log 설정
  app.useLogger(winstonLogger);

  // 전역 파이프
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // DTO 있는 값 사용
      forbidNonWhitelisted: true, // DTO 없는 값 에러
      transform: true // DTO 형식으로 변환
    })
  );

  // 포트 설정
  await app.listen(process.env.APP_PORT);
}

bootstrap().then(() => {
  // 실행 로그 출력
  Logger.verbose(process.env.APP_ENV, 'APP ENV');
  Logger.verbose(process.env.APP_NAME, 'APP NAME');
  Logger.verbose(process.env.APP_VERSION, 'APP VERSION');

  // 테스트 로그 출력
  Logger.debug(`http://localhost:${process.env.APP_PORT}`, 'APP TEST DM');
  Logger.debug(`http://127.0.0.1:${process.env.APP_PORT}`, 'APP TEST IP');
});
