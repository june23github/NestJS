import { Inject, Injectable } from '@nestjs/common';
import { DatabaseOptions } from './database.options';
import mongoose from 'mongoose';

@Injectable()
export class DatabaseService {
  constructor(
    @Inject('DATABASE_OPTIONS') private readonly options: DatabaseOptions,
  ) {}

  async connect() {
    try {
      await mongoose.connect(this.options.uri);
      console.log('Connected to MongoDB');
    } catch (error) {
      console.log(error);
    }
  }
}
