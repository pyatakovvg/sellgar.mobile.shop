import { IsBoolean, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { MetaEntity } from '../../meta';
import { PayMethodEntity } from './pay-method.entity.ts';

export class PayMethodResultEntity {
  @IsBoolean()
  success: boolean;

  @Type(() => PayMethodEntity)
  @ValidateNested()
  data: PayMethodEntity;

  @Type(() => MetaEntity)
  @ValidateNested()
  meta: MetaEntity;
}
