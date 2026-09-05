import { Type } from 'class-transformer';
import { IsBoolean, ValidateNested } from 'class-validator';
import { MetaEntity } from '../../meta';
import { CreationRequestSignUpEntity } from './creation-request-sign-up.entity.ts';

export class CreationRequestSignUpResultEntity {
  @IsBoolean()
  success: boolean;

  @Type(() => CreationRequestSignUpEntity)
  @ValidateNested()
  data: CreationRequestSignUpEntity;

  @Type(() => MetaEntity)
  @ValidateNested()
  meta: MetaEntity;
}
