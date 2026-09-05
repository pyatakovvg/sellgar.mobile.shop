import { IsBoolean, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { MetaEntity } from '../../meta';
import { BankCardEntity } from './bank-card.entity.ts';

export class BankCardResultEntity {
  @IsBoolean()
  success: boolean;

  @ValidateNested()
  @Type(() => BankCardEntity)
  data: BankCardEntity[];

  @ValidateNested()
  @Type(() => MetaEntity)
  meta: MetaEntity;
}
