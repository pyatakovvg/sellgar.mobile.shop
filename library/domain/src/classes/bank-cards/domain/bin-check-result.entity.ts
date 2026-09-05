import { IsBoolean, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { MetaEntity } from '../../meta';
import { BinCheckEntity } from './bin-check.entity.ts';

export class BinCheckResultEntity {
  @IsBoolean()
  success: boolean;

  @ValidateNested()
  @Type(() => BinCheckEntity)
  data: BinCheckEntity;

  @ValidateNested()
  @Type(() => MetaEntity)
  meta: MetaEntity;
}
