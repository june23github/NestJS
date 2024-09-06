import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from './datasource';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        ...AppDataSource.options,
      }),
      dataSourceFactory: async () => {
        const dataSource = await AppDataSource.initialize();
        return dataSource;
      },
    }),
  ],
})
export class AppModule {}
