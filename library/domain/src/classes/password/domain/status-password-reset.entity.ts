import { Type } from 'class-transformer';
import { IsString, IsOptional } from 'class-validator';

import { PasswordResetStatus } from './password-reset-status.type.ts';
import { StatusPasswordRecoveryToken } from './status-password-recovery-token.entity.ts';

export class StatusPasswordResetEntity {
  @IsString()
  status: PasswordResetStatus;

  @Type(() => StatusPasswordRecoveryToken)
  @IsOptional()
  recoveryToken?: StatusPasswordRecoveryToken;
}
