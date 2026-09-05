import { Type } from 'class-transformer';
import { IsBoolean, ValidateNested } from 'class-validator';
import { MetaEntity } from '../../meta';
import { ConfirmPasswordResetEntity } from './confirm-password-reset.entity.ts';

export class ConfirmPasswordResetResultEntity {
  @IsBoolean()
  success: boolean;

  @Type(() => ConfirmPasswordResetEntity)
  @ValidateNested()
  data: ConfirmPasswordResetEntity;

  @Type(() => MetaEntity)
  @ValidateNested()
  meta: MetaEntity;
}
