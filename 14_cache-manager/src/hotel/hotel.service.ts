import { Injectable, Inject } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class HotelService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  // Phương thức sử dụng cache
  async getHotelsUsingCache() {
    const cachedHotels = await this.cacheManager.get('hotels');

    if (cachedHotels) {
      console.log('Lấy dữ liệu từ cache');
      return cachedHotels;
    }

    console.log('Lấy dữ liệu từ database');
    const hotels = [
      { id: 1, name: 'Hotel A', address: '123 Street' },
      { id: 2, name: 'Hotel B', address: '456 Avenue' },
    ];

    // Lưu dữ liệu vào cache với TTL 10 phút
    await this.cacheManager.set('hotels', hotels, 600);

    return hotels;
  }
}
