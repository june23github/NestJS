import { MigrationInterface } from 'typeorm';
import { MongoClient } from 'mongodb';

export class CreateUserCollection1234567890123 implements MigrationInterface {
  public async up(mongoClient: MongoClient): Promise<void> {
    const db = mongoClient.db();
    await db.createCollection('user', {
      validator: {
        $jsonSchema: {
          bsonType: 'object',
          required: ['name', 'email'],
          properties: {
            name: {
              bsonType: 'string',
            },
            email: {
              bsonType: 'string',
            },
          },
        },
      },
    });
  }

  public async down(mongoClient: MongoClient): Promise<void> {
    const db = mongoClient.db();
    await db.dropCollection('user');
  }
}
