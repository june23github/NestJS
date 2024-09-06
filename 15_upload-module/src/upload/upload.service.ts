import { Injectable } from '@nestjs/common';
import { Uploader } from './uploader.interface';
import { UploaderFactory } from './uploader-factory.service';

@Injectable()
export class UploadService {
  // async saveFileData(file: Express.Multer.File) {
  //   const fileData = {
  //     filename: file.filename,
  //     originalname: file.originalname,
  //     mimetype: file.mimetype,
  //     size: file.size,
  //   };
  //   return fileData;
  // }
  async uploadFile(file: Express.Multer.File, uploadType: string) {
    const uploader: Uploader = UploaderFactory.createUploader(uploadType);
    return await uploader.upload(file);
  }
}
