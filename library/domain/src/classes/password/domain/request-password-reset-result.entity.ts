import { Type } from 'class-transformer';
import { IsBoolean, ValidateNested } from 'class-validator';
import { MetaEntity } from '../../meta';
import { RequestPasswordResetEntity } from './request-password-reset.entity.ts';

export class RequestPasswordResetResultEntity {
  @IsBoolean()
  success: boolean;

  @Type(() => RequestPasswordResetEntity)
  @ValidateNested()
  data: RequestPasswordResetEntity;

  @Type(() => MetaEntity)
  @ValidateNested()
  meta: MetaEntity;
}
