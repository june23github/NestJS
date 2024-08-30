import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  findUserById(userId: string) {
    return { id: userId, name: 'User Example' };
  }
}
