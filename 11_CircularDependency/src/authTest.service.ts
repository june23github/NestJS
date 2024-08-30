// import { Injectable } from '@nestjs/common';
// import { UserService } from './user.service';

// @Injectable()
// export class AuthService {
//   constructor(private readonly userService: UserService) {}

//   validateUser(userId: string) {
//     const user = this.userService.findUserById(userId);
//   }
// }
import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { UserService } from './userTest.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
  ) {}

  validateUser(userId: string) {
    const user = this.userService.findUserById(userId);
    // Additional authentication logic...
  }
}
