import { IsString, IsOptional } from 'class-validator';

import { PasswordConfirmationResult } from './password-confirmation-result.type.ts';

export class ConfirmPasswordResetEntity {
  @IsString()
  confirmationResult: PasswordConfirmationResult;

  @IsOptional()
  @IsString()
  passwordResetToken?: string;

  @IsOptional()
  @IsString()
  passwordResetTokenExpiresAt?: string;
}
