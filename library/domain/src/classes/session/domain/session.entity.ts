import { IsString } from 'class-validator';

export class SessionEntity {
  @IsString()
  uuid: string;
}
