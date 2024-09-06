import { Controller, Get } from '@nestjs/common';
import { HotelService } from './hotel.service';

@Controller('hotels')
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  // Sử dụng phương thức trong service để lấy danh sách khách sạn
  @Get()
  async getHotels() {
    return this.hotelService.getHotelsUsingCache();
  }
}
