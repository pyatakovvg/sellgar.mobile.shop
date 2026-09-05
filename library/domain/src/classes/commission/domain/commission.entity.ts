import { IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

import { CommissionDetailsEntity } from './commission-details.entity.ts';

export class CommissionEntity {
  @IsNumber()
  debitAmount: number;

  @IsNumber()
  creditAmount: number;

  @IsNumber()
  commissionAmount: number;

  @Type(() => CommissionDetailsEntity)
  @ValidateNested()
  feeDetails: CommissionDetailsEntity;
}
