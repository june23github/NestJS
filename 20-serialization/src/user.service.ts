import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { UserDTO } from './user.dto';

@Injectable()
export class UserService {
  private users = [
    { id: 1, name: 'John Doe 1', password: '123456', createdAt: new Date() },
    { id: 2, name: 'Jane Doe 2', password: 'abcdef', createdAt: new Date() },
    { id: 3, name: 'Jane Doe 3', password: 'ghiklm', createdAt: new Date() },
    { id: 4, name: 'Jane Doe 4', password: '456789', createdAt: new Date() },
    { id: 5, name: 'Jane Doe 5', password: 'tyuiop', createdAt: new Date() },
    { id: 6, name: 'Jane Doe 6', password: 'zxcvbn', createdAt: new Date() },
  ];

  findAll(role: string) {
    const group = role === 'admin' ? ['admin'] : ['user'];
    return this.users.map((user) =>
      plainToInstance(UserDTO, user, { groups: group }),
    );
  }
}
