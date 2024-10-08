import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    DatabaseModule.forRoot({
      uri: 'mongodb://localhost:27017/nestjs',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
