import { OtpEntity } from '@library/domain';

import { Type } from 'class-transformer';
import { IsString, ValidateNested } from 'class-validator';

export class AuthOtpRouteStateEntity {
  @IsString()
  phone: string;

  @IsString()
  requestUuid: string;

  @Type(() => OtpEntity)
  @ValidateNested()
  verification: OtpEntity;
}
