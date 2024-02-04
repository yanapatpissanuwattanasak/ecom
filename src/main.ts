import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Connection } from 'typeorm';
import { HttpExceptionFilter } from './filter/exception.filter';
const cors = require('cors');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter())
  app.use(cors());
  await app.listen(8000);
}
bootstrap();
