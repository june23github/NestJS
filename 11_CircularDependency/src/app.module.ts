import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { Mediator } from './mediator';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AuthService, UserService, Mediator],
})
export class AppModule {}
