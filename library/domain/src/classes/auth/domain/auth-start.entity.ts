import { IsString, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

import { OtpEntity } from '../../otp';

export class AuthStartEntity {
  @IsString()
  nextAction: 'waitOtp' | 'waitCredentials';

  @Type(() => OtpEntity)
  @IsOptional()
  verification?: OtpEntity;
}
