import { ValidateNested, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';

import { MetaEntity } from '../../meta';
import { OtpEntity } from './otp.entity.ts';

export class OtpResultEntity {
  @Type(() => OtpEntity)
  @ValidateNested()
  data: OtpEntity;

  @Type(() => MetaEntity)
  @ValidateNested()
  meta: MetaEntity;

  @IsBoolean()
  success: boolean;
}
