import { IsBoolean, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { MetaEntity } from '../../meta';
import { CreateIdentificationEntity } from './create-identification.entity.ts';

export class CreateIdentificationResultEntity {
  @IsBoolean()
  success: boolean;

  @Type(() => CreateIdentificationEntity)
  @ValidateNested()
  data: CreateIdentificationEntity;

  @Type(() => MetaEntity)
  @ValidateNested()
  meta: MetaEntity;
}
