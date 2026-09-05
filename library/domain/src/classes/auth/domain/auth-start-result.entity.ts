import { ValidateNested, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';
import { MetaEntity } from '../../meta';
import { AuthStartEntity } from './auth-start.entity.ts';

export class AuthStartResultEntity {
  @Type(() => AuthStartEntity)
  @ValidateNested()
  data: AuthStartEntity;

  @Type(() => MetaEntity)
  @ValidateNested()
  meta: MetaEntity;

  @IsBoolean()
  success: boolean;
}
