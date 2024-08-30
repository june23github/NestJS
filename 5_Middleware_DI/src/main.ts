import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { AllExceptionFilter } from './filters/all-exceptions.filter';
// import { I18nService } from 'nestjs-i18n';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalFilters(new AllExceptionFilter(app.get(I18nService)));
  await app.listen(3000);
}
bootstrap();
