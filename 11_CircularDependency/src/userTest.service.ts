// import { Injectable } from '@nestjs/common';
// import { AuthService } from './auth.service';

// @Injectable()
// export class UserService {
//   constructor(private readonly authService: AuthService) {}

//   findUserById(userId: string) {
//     const isValidUser = this.authService.validateUser(userId);
//     return { id: userId, name: 'User Example' };
//   }
// }
import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { AuthService } from './authTest.service';

@Injectable()
export class UserService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  findUserById(userId: string) {
    const isValidUser = this.authService.validateUser(userId);
    return { id: userId, name: 'User Example' };
  }
}
