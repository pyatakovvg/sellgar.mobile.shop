import { IsBoolean, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

import { MetaEntity } from '../../meta';
import { PayMethodVerifyDataEntity } from './pay-method-verify-data.entity.ts';

export class PayMethodVerifyResultEntity {
  @IsBoolean()
  success: boolean;

  @ValidateNested()
  @Type(() => PayMethodVerifyDataEntity)
  data: PayMethodVerifyDataEntity;

  @ValidateNested()
  @Type(() => MetaEntity)
  meta: MetaEntity;
}
