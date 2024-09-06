export interface Uploader {
  upload(file: Express.Multer.File): Promise<any>;
}
