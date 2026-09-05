import { IsString } from 'class-validator';

export class AuthEntity {
  @IsString()
  accessToken: string;

  @IsString()
  refreshToken: string;

  @IsString()
  expires: string;
}
