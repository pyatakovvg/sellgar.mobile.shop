import { IsNumber, IsOptional } from 'class-validator';

export class PayMethodVerifyProviderOptionsEntity {
  @IsNumber()
  @IsOptional()
  fixedCreditAmount?: number;

  @IsNumber()
  @IsOptional()
  fixedDebitAmount?: number;
}
