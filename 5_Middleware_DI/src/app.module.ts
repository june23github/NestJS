import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD
import { LoggerMiddleware } from './logger/logger.middleware';
=======
<<<<<<< HEAD
import { I18nCustomModule } from './i18n/i18n.module';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionFilter } from './filters/all-exceptions.filter';

@Module({
  imports: [I18nCustomModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionFilter,
    },
  ],
=======
import { ItemsController } from './items/items.controller';
>>>>>>> 8ca7de1e0d3373575f8bfd9c3cfce1db22bcc21a

@Module({
  imports: [],
  controllers: [AppController, ItemsController],
  providers: [AppService],
>>>>>>> 9a596205df17f360ba5c42c3833681287a30cbeb
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*'); // Áp dụng cho tất cả các route
  }
}
