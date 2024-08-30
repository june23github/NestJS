import { Controller, Get, HttpCode, Param } from '@nestjs/common';
import { HelloService } from './helloworld.service';

@Controller('hello')
export class HelloWorldController {
  constructor(private readonly helloService: HelloService) {}
  @Get()
  @HttpCode(200)
  getHello(): string {
    return this.helloService.getHello();
  }

  @Get(':id')
  getById(@Param('id') id: string): string {
    return `Requested ID: ${id}`;
  }
}
