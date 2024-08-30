import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { I18nService } from 'nestjs-i18n';

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  constructor(private readonly i18n: I18nService) {}
  async catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    const lang = request.headers['accept-language'] || 'en';
    const messageKey =
      exception instanceof HttpException ? exception.message : 'ERROR_INTERNAL';
    const message = await this.i18n.translate(messageKey, { lang });
    response.status(status).json({
      statusCode: status,
      timeStamp: new Date().toISOString(),
      path: request.url,
      message: message,
    });
  }
}
