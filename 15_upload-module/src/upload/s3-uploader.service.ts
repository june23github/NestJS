// s3-uploader.service.ts
import { Uploader } from './uploader.interface';
import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';

@Injectable()
export class S3Uploader implements Uploader {
  private s3 = new S3();

  async upload(file: Express.Multer.File): Promise<any> {
    const params = {
      Bucket: 'your-bucket-name',
      Key: file.originalname,
      Body: file.buffer,
      ContentType: file.mimetype,
    };

    const uploadResult = await this.s3.upload(params).promise();

    return {
      message: 'File uploaded to S3',
      url: uploadResult.Location,
    };
  }
}
