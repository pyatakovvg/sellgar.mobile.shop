import { Type } from 'class-transformer';
import { ValidateNested, IsBoolean } from 'class-validator';
import { MetaEntity } from '../../meta';
import { FeaturesEntity } from './features.entity.ts';

export class FeaturesResultEntity {
  @IsBoolean()
  success: boolean;

  @Type(() => FeaturesEntity)
  @ValidateNested()
  data: FeaturesEntity;

  @Type(() => MetaEntity)
  @ValidateNested()
  meta: MetaEntity;
}
