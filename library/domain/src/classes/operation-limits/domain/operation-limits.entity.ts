import { Type } from 'class-transformer';
import { ValidateNested, IsBoolean, IsArray, IsOptional } from 'class-validator';

import { LimitEntity } from './limit.entity.ts';
import { TOperationLimitsReasonsType } from './operation-limits-reasons-type.type.ts';

export class OperationLimitsEntity {
  @IsBoolean()
  isAllowed: boolean;

  @IsArray()
  reasons: TOperationLimitsReasonsType[];

  @IsOptional()
  @Type(() => LimitEntity)
  @ValidateNested()
  allowedAmount: LimitEntity | null;
}
