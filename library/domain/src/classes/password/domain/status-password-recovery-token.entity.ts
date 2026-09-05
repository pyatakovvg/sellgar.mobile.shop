import { IsString } from 'class-validator';

export class StatusPasswordRecoveryToken {
  @IsString()
  passwordRecoveryToken: string;

  @IsString()
  expirationDate: string;
}
