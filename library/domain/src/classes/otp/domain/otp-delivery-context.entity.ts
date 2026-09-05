import { IsDateString, IsNumber } from 'class-validator';

export class OtpDeliveryContextEntity {
  @IsNumber()
  usedAttempts: number;

  @IsNumber()
  totalAttempts: number;

  @IsDateString()
  nextAttempt: string;

  @IsNumber()
  untilNextAttemptSec: number;
}
