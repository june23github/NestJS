import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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

@Module({
  imports: [],
  controllers: [AppController, ItemsController],
  providers: [AppService],
>>>>>>> 9a596205df17f360ba5c42c3833681287a30cbeb
})
export class AppModule {}
