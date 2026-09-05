import { IsString, IsOptional } from 'class-validator';

import { SignUpCreationRequestStatus } from './sign-up-creation-request-status.type.ts';

export class CreationRequestSignUpEntity {
  @IsString()
  status: SignUpCreationRequestStatus;

  @IsString()
  @IsOptional()
  passwordResetToken: string;

  @IsString()
  @IsOptional()
  passwordResetTokenExpiresAt: string;
}
