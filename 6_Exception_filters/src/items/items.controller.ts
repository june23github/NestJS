import {
  Controller,
  Get,
  Param,
  Query,
  ParseIntPipe,
  UsePipes,
} from '@nestjs/common';
import { NameValidationPipe } from 'src/name-validation/name-validation.pipe';

@Controller('items')
export class ItemsController {
  @Get(':id')
  getItemById(@Param('id', ParseIntPipe) id: number) {
    // Sử dụng ParseIntPipe để biến đổi id thành số
    return `Item with ID: ${id}`;
  }

  @Get()
  @UsePipes(NameValidationPipe)
  getItemsByName(@Query('name') name: string) {
    return `Items with name: ${name}`;
  }
}
