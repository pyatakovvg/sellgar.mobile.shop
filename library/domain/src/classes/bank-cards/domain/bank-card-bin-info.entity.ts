import { IsString, ValidateNested, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { BankCardIssuerEntity } from './bank-card-issuer.entity.ts';

export class BankCardBinInfoEntity {
  @IsString()
  brand: string;

  @IsString()
  @IsOptional()
  level?: string;

  @IsString()
  type: string;

  @Type(() => BankCardIssuerEntity)
  @ValidateNested()
  issuer: BankCardIssuerEntity;
}
