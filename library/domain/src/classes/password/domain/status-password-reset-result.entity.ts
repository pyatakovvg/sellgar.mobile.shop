import { Type } from 'class-transformer';
import { IsBoolean, ValidateNested } from 'class-validator';
import { MetaEntity } from '../../meta';
import { StatusPasswordResetEntity } from './status-password-reset.entity.ts';

export class StatusPasswordResetResultEntity {
  @IsBoolean()
  success: boolean;

  @Type(() => StatusPasswordResetEntity)
  @ValidateNested()
  data: StatusPasswordResetEntity;

  @Type(() => MetaEntity)
  @ValidateNested()
  meta: MetaEntity;
}
