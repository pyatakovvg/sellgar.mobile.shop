import { IsString } from 'class-validator';

export class RequestSignUpEntity {
  @IsString()
  token: string;
}
