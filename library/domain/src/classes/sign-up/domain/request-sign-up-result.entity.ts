import { Type } from 'class-transformer';
import { IsBoolean, ValidateNested } from 'class-validator';
import { MetaEntity } from '../../meta';
import { RequestSignUpEntity } from './request-sign-up.entity.ts';

export class RequestSignUpResultEntity {
  @IsBoolean()
  success: boolean;

  @Type(() => RequestSignUpEntity)
  @ValidateNested()
  data: RequestSignUpEntity;

  @Type(() => MetaEntity)
  @ValidateNested()
  meta: MetaEntity;
}
