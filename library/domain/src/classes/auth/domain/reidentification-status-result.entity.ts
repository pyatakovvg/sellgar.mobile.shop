import { Type } from 'class-transformer';
import { IsBoolean, ValidateNested } from 'class-validator';
import { MetaEntity } from '../../meta';
import { ReidentificationStatusEntity } from './reidentification-status.entity.ts';

export class ReidentificationStatusResultEntity {
  @Type(() => ReidentificationStatusEntity)
  @ValidateNested()
  data: ReidentificationStatusEntity;

  @Type(() => MetaEntity)
  @ValidateNested()
  meta: MetaEntity;

  @IsBoolean()
  success: boolean;
}
