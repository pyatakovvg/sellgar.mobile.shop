import { ValidateNested, IsOptional, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';

import { LimitEntity } from '../../operation-limits';
import { EBankcardLimitAvailabilityStatus } from './bankcard-limit-availability-status.enum.ts';

export class DepositDetailsEntity {
  @IsEnum(EBankcardLimitAvailabilityStatus)
  availabilityStatus: EBankcardLimitAvailabilityStatus;

  @IsOptional()
  @ValidateNested()
  @Type(() => LimitEntity)
  amountLimits: LimitEntity | null;
}
