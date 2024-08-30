import { Module } from '@nestjs/common';
import {
  I18nModule,
  I18nJsonLoader,
  AcceptLanguageResolver,
} from 'nestjs-i18n';
import * as path from 'path';

@Module({
  imports: [
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loader: I18nJsonLoader,
      loaderOptions: {
        path: path.join(__dirname, '../i18n/'),
        watch: true,
      },
      resolvers: [
        { use: AcceptLanguageResolver, options: ['accept-language'] },
      ],
    }),
  ],
})
export class I18nCustomModule {}
