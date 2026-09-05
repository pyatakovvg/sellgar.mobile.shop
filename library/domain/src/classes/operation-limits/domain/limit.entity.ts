import { IsNumber } from 'class-validator';

export class LimitEntity {
  @IsNumber()
  min: number;

  @IsNumber()
  max: number;

  @IsNumber()
  maxCredit: number;
}
