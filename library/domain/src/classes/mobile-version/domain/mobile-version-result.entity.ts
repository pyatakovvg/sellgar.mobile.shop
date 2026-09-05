import { Type } from 'class-transformer';
import { IsBoolean, ValidateNested } from 'class-validator';
import { MetaEntity } from '../../meta';
import { MobileVersionEntity } from './mobile-version.entity.ts';

export class MobileVersionResultEntity {
  @IsBoolean()
  success: boolean;

  @Type(() => MobileVersionEntity)
  @ValidateNested()
  data: MobileVersionEntity;

  @Type(() => MetaEntity)
  @ValidateNested()
  meta: MetaEntity;
}
