import { IsBoolean, ValidateNested, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

import { MetaEntity } from '../../meta';

export class BankCardDeleteResultEntity {
  @IsBoolean()
  success: boolean;

  @IsOptional()
  data: null;

  @ValidateNested()
  @Type(() => MetaEntity)
  meta: MetaEntity;
}
