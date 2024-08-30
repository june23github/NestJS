import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloWorldController } from './helloworld.controller';
import { HelloService } from './helloworld.service';

@Module({
  imports: [],
  controllers: [AppController, HelloWorldController],
  providers: [AppService, HelloService],
})
export class AppModule {}
