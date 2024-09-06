import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { HotelService } from './hotel.service';
import { HotelController } from './hotel.controller';

@Module({
  imports: [CacheModule.register()],
  providers: [HotelService],
  controllers: [HotelController],
})
export class HotelModule {}
