import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Post()
  @HttpCode(201)
  async create(@Body() user: User): Promise<User> {
    return this.usersService.create(user);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUser: User,
  ): Promise<User> {
    return this.usersService.update(id, updateUser);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return this.usersService.delete(id);
  }
}
