import { IsString, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { VerifyBankcardBinCheckResultIssuerEntity } from './verify-bankcard-bin-check-result-issuer.entity.ts';

export class VerifyBankcardBinCheckResultEntity {
  @Type(() => VerifyBankcardBinCheckResultIssuerEntity)
  @ValidateNested()
  issuer: VerifyBankcardBinCheckResultIssuerEntity;

  @IsString()
  brand: string;

  @IsString()
  type: string;

  @IsString()
  @IsOptional()
  level: string;
}
