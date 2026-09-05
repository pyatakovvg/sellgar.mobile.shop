import { Type } from 'class-transformer';
import { IsNumber, IsString, IsOptional } from 'class-validator';
import { Operation3DSActions } from './operation-3ds-actions.entity.ts';

export class OperationPendingDataEntity {
  @IsOptional()
  @IsNumber()
  attempt?: number;

  @IsString()
  type:
    | 'withdrawal-confirmation'
    | 'pay-service-confirmation'
    | 'payment-waiting'
    | '3ds-challenge-waiting'
    | '3ds-fingerprint-waiting';

  @IsOptional()
  @IsString()
  url?: string;

  @IsOptional()
  @IsString()
  verificationRequestUuid?: string;

  @IsOptional()
  @Type(() => Operation3DSActions)
  threeDsChallengeAction?: Operation3DSActions;

  @IsOptional()
  @Type(() => Operation3DSActions)
  threeDsFingerprintActions?: Operation3DSActions[];
}
