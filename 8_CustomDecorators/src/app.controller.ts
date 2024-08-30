import {
  Controller,
  Get,
  Headers,
  // HttpException,
  // HttpStatus,
  Param,
} from '@nestjs/common';
import { AppService } from './app.service';
<<<<<<< HEAD
import { User } from './user.decorator';

@Controller('profile')
=======
<<<<<<< HEAD
import { I18n, I18nContext } from 'nestjs-i18n';
@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get(':id')
  // async getUser(@Param('id') id: string) {
  //   if (id === '0') {
  //     throw new HttpException('ERROR_NOT_FOUND', HttpStatus.NOT_FOUND);
  //   } else if (id === 'unauthorized') {
  //     throw new HttpException('ERROR_UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
  //   } else if (id === 'forbidden') {
  //     throw new HttpException('ERROR_FORBIDDEN', HttpStatus.FORBIDDEN);
  //   } else if (id === 'badrequest') {
  //     throw new HttpException('ERROR_BAD_REQUEST', HttpStatus.BAD_REQUEST);
  //   } else {
  //     return { id, message: 'SUCCESS_OPERATION' };
  //   }
  // }
  @Get(':text')
  async getText(
    @Param('text') text: string,
    @I18n() i18n: I18nContext,
    @Headers('accept-language') acceptLanguage: string,
  ) {
    console.log('Requested text:', text);
    console.log('Accept-Language header:', acceptLanguage);
    try {
      const translation = await i18n.translate(text);
      console.log('Translation:', translation);
      return translation;
    } catch (error) {
      console.error('Translation error:', error);
      return `Translation failed: ${error.message}`;
    }
  }

  @Get('/error/internal')
  async getInternalError() {
    throw new Error('ERROR_INTERNAL');
=======

@Controller('api')
>>>>>>> 8ca7de1e0d3373575f8bfd9c3cfce1db22bcc21a
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
<<<<<<< HEAD
  getProfile(@User() user: any) {
    return user;
=======
  getApiKey(): string {
    return 'a';
>>>>>>> 9a596205df17f360ba5c42c3833681287a30cbeb
>>>>>>> 8ca7de1e0d3373575f8bfd9c3cfce1db22bcc21a
  }
}
