import { Type } from 'class-transformer';
import { ValidateNested, IsBoolean, IsOptional } from 'class-validator';
import { OperationLimitErrorEntity } from './operation-limit-error.entity.ts';
import { MetaEntity } from '../../meta';
import { OperationLimitsEntity } from './operation-limits.entity.ts';

export class OperationLimitsResultEntity {
  @IsBoolean()
  success: boolean;

  @IsOptional()
  @Type(() => OperationLimitsEntity)
  @ValidateNested()
  data?: OperationLimitsEntity;

  @IsOptional()
  @Type(() => OperationLimitErrorEntity)
  @ValidateNested()
  error?: OperationLimitErrorEntity;

  @IsOptional()
  @Type(() => MetaEntity)
  @ValidateNested()
  meta?: MetaEntity;
}
