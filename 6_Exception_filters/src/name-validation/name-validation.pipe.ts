import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class NameValidationPipe implements PipeTransform {
  transform(value: string) {
    if (value.length < 3) {
      throw new BadRequestException('Name is too short');
    }
    return value;
  }
}
