import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module'; // Import DatabaseModule
import { UsersModule } from './users.module'; // Import UsersModule

@Module({
  imports: [
    DatabaseModule.forRoot('mongodb://localhost:27017/nestjs', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    UsersModule,
  ],
})
export class AppModule {}
