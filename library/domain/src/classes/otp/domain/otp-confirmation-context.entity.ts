import { IsNumber } from 'class-validator';

export class OtpConfirmationContextEntity {
  @IsNumber()
  usedAttempts: number;

  @IsNumber()
  totalAttempts: number;
}
