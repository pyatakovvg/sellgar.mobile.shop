import { Type } from 'class-transformer';
import { IsBoolean, ValidateNested } from 'class-validator';
import { MetaEntity } from '../../meta';
import { ConfirmSignUpEntity } from './confirm-sign-up.entity.ts';

export class ConfirmSignUpResultEntity {
  @IsBoolean()
  success: boolean;

  @Type(() => ConfirmSignUpEntity)
  @ValidateNested()
  data: ConfirmSignUpEntity;

  @Type(() => MetaEntity)
  @ValidateNested()
  meta: MetaEntity;
}
