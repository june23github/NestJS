import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  validateUser(userId: string) {
    if (userId) return true;
  }
}
