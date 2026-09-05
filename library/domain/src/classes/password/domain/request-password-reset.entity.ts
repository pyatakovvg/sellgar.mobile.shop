import { Type } from 'class-transformer';
import { IsString } from 'class-validator';

import { OtpEntity } from '../../otp';

export class RequestPasswordResetEntity {
  @IsString()
  token: string;

  @Type(() => OtpEntity)
  verification: OtpEntity;
}
