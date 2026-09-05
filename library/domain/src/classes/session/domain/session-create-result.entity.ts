import { Type } from 'class-transformer';
import { IsBoolean, ValidateNested } from 'class-validator';
import { MetaEntity } from '../../meta';
import { SessionEntity } from './session.entity.ts';

export class SessionCreateResultEntity {
  @IsBoolean()
  success: boolean;

  @Type(() => SessionEntity)
  @ValidateNested()
  data: SessionEntity;

  @Type(() => MetaEntity)
  @ValidateNested()
  meta: MetaEntity;
}
