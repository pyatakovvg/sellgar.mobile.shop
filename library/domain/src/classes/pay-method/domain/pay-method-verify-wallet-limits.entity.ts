import { IsNumber, IsOptional } from 'class-validator';

export class PayMethodVerifyWalletLimitsEntity {
  @IsNumber()
  availableForTransaction: number;

  @IsNumber()
  @IsOptional()
  availableToday: null;
}
