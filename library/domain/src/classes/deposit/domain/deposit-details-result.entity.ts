import { IsBoolean, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { MetaEntity } from '../../meta';
import { DepositDetailsEntity } from './deposit-details.entity.ts';

export class DepositDetailsResultEntity {
  @IsBoolean()
  success: boolean;

  @ValidateNested()
  @Type(() => DepositDetailsEntity)
  data: DepositDetailsEntity;

  @ValidateNested()
  @Type(() => MetaEntity)
  meta: MetaEntity;
}
