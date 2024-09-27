import { Exclude, Expose, Transform } from 'class-transformer';

export class UserDTO {
  @Expose()
  id: number;

  @Expose()
  name;
  string;

  @Expose({ groups: ['Admin'] })
  @Transform(({ value }) => value.toISOString(), { groups: ['admin'] })
  createdAt: Date;

  @Exclude()
  password: string;

  constructor(partial: Partial<UserDTO>) {
    Object.assign(this, partial);
  }
}
