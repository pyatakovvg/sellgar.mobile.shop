import { IsString, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { BinCheckResultIssuerEntity } from './bin-check-result-issuer.entity.ts';

export class BinCheckResultDataEntity {
  @Type(() => BinCheckResultIssuerEntity)
  @ValidateNested()
  issuer: BinCheckResultIssuerEntity;

  @IsString()
  brand: string;

  @IsString()
  type: string;

  @IsString()
  @IsOptional()
  level: string;
}
