import { Uploader } from './uploader.interface';
import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class LocalUploader implements Uploader {
  private uploadDir = './uploads';

  async upload(file: Express.Multer.File): Promise<any> {
    const filePath = path.join(this.uploadDir, file.filename);

    if (!fs.existsSync(this.uploadDir)) {
      fs.mkdirSync(this.uploadDir, { recursive: true });
    }

    return {
      message: 'File uploaded to local server',
      filePath,
    };
  }
}
