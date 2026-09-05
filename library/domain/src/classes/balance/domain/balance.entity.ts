import { IsNumber, IsString } from 'class-validator';

export class BalanceEntity {
  @IsNumber()
  amount: number;

  @IsString()
  currency: string;
}
