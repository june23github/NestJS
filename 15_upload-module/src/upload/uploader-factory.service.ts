import { Uploader } from './uploader.interface';
import { LocalUploader } from './local-uploader.service';
// import { S3Uploader } from './s3-uploader.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UploaderFactory {
  static createUploader(type: string): Uploader {
    switch (type) {
      // case 's3':
      //   return new S3Uploader();
      case 'local':
      default:
        return new LocalUploader();
    }
  }
}
