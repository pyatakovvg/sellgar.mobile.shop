import { IsString, ValidateNested, IsArray } from 'class-validator';
import { Type } from 'class-transformer';

import { TBankCardCapabilities } from './bank-card-capabilities.type.ts';
import { BankCardBinInfoEntity } from './bank-card-bin-info.entity.ts';

export class BankCardEntity {
  @Type(() => BankCardBinInfoEntity)
  @ValidateNested()
  binInfo: BankCardBinInfoEntity;

  @IsString()
  token: string;

  @IsString()
  maskedPan: string;

  @IsString()
  spaceType: string;

  @IsArray()
  capabilities: TBankCardCapabilities[];
}
