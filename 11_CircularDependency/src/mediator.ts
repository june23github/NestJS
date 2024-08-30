import { Injectable } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthService } from './auth.service';

@Injectable()
export class Mediator {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  authenticateUser(userId: string) {
    // Sử dụng userService để xác thực người dùng
    const user = this.userService.findUserById(userId);
    return this.authService.validateUser(user.id);
  }

  getUserDetails(userId: string) {
    // Sử dụng authService để lấy chi tiết người dùng
    const isValidUser = this.authService.validateUser(userId);
    if (isValidUser) {
      return this.userService.findUserById(userId);
    }
  }
}
