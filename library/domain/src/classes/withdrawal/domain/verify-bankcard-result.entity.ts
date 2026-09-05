import { IsBoolean, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

import { MetaEntity } from '../../meta';
import { VerifyBankcardDataEntity } from './verify-bankcard-data.entity.ts';

export class VerifyBankcardResultEntity {
  @IsBoolean()
  success: boolean;

  @ValidateNested()
  @Type(() => VerifyBankcardDataEntity)
  data: VerifyBankcardDataEntity;

  @ValidateNested()
  @Type(() => MetaEntity)
  meta: MetaEntity;
}
