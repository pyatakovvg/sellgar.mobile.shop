import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class PasswordSetRouteStateEntity {
  @IsString()
  @Matches(/^77\d{9}$/)
  phone: string;

  @IsNotEmpty()
  @IsString()
  passwordResetToken: string;
}
