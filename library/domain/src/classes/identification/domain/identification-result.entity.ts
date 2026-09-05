import { IsBoolean, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { MetaEntity } from '../../meta';
import { IdentificationEntity } from './identification.entity.ts';

export class IdentificationResultEntity {
  @IsBoolean()
  success: boolean;

  @Type(() => IdentificationEntity)
  @ValidateNested()
  data: IdentificationEntity;

  @Type(() => MetaEntity)
  @ValidateNested()
  meta: MetaEntity;
}
