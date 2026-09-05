import { Type } from 'class-transformer';
import { ValidateNested, IsBoolean } from 'class-validator';
import { MetaEntity } from '../../meta';
import { ProfileEntity } from './profile.entity.ts';

export class ProfileResultEntity {
  @IsBoolean()
  success: boolean;

  @Type(() => ProfileEntity)
  @ValidateNested()
  data: ProfileEntity;

  @Type(() => MetaEntity)
  @ValidateNested()
  meta: MetaEntity;
}
