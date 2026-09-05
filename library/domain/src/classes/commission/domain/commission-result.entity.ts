import { IsBoolean, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { MetaEntity } from '../../meta';
import { CommissionEntity } from './commission.entity.ts';

export class CommissionResultEntity {
  @IsBoolean()
  success: boolean;

  @Type(() => CommissionEntity)
  @ValidateNested()
  data: CommissionEntity;

  @Type(() => MetaEntity)
  @ValidateNested()
  meta: MetaEntity;
}
