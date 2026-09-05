import { ValidateNested, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';
import { MetaEntity } from '../../meta';
import { AuthEntity } from './auth.entity.ts';

export class AuthResultEntity {
  @Type(() => AuthEntity)
  @ValidateNested()
  data: AuthEntity;

  @Type(() => MetaEntity)
  @ValidateNested()
  meta: MetaEntity;

  @IsBoolean()
  success: boolean;
}
