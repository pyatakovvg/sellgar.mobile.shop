import { IsString, Matches } from 'class-validator';

export class PasswordResetOtpRouteStateEntity {
  @IsString()
  @Matches(/^77\d{9}$/)
  phone: string;
}
