import { Inject, Injectable } from '@nestjs/common';

const CONFIG = {
  provide: 'CONFIG',
  useValue: {
    host: 'localhost',
    port: 3000,
  },
};
@Injectable()
export class AppService {
  constructor(@Inject(CONFIG) private config: { host: string; port: number }) {}
  getConfig() {
    return this.config;
  }
}
