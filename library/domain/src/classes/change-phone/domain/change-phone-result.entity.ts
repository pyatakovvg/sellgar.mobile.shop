import { Type } from 'class-transformer';
import { ValidateNested, IsBoolean } from 'class-validator';
import { MetaEntity } from '../../meta';
import { ChangePhoneEntity } from './change-phone.entity.ts';

export class ChangePhoneResultEntity {
  @IsBoolean()
  success: boolean;

  @Type(() => ChangePhoneEntity)
  @ValidateNested()
  data: ChangePhoneEntity;

  @Type(() => MetaEntity)
  @ValidateNested()
  meta: MetaEntity;
}
