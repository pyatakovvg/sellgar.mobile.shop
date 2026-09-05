import { Type } from 'class-transformer';
import { ValidateNested, IsBoolean } from 'class-validator';
import { MetaEntity } from '../../meta';
import { BalanceEntity } from './balance.entity.ts';

export class BalanceResultEntity {
  @IsBoolean()
  success: boolean;

  @Type(() => BalanceEntity)
  @ValidateNested()
  data: BalanceEntity[];

  @Type(() => MetaEntity)
  @ValidateNested()
  meta: MetaEntity;
}
