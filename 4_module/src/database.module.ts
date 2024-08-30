import { Module, DynamicModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({})
export class DatabaseModule {
  static forRoot(uri: string, options?: Record<string, any>): DynamicModule {
    return {
      module: DatabaseModule,
      imports: [MongooseModule.forRoot(uri, options)],
      exports: [MongooseModule],
    };
  }
}
