import { IsString, IsNumber } from 'class-validator';

export class CommissionDetailsEntity {
  @IsString()
  calculationType: 'above';

  @IsNumber()
  fixAmount: number;

  @IsNumber()
  max: number;

  @IsNumber()
  min: number;

  @IsNumber()
  percent: number;
}
