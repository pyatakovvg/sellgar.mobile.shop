import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { VerifyBankcardBinCheckResultEntity } from './verify-bankcard-bin-check-result.entity.ts';

export class VerifyBankcardDataEntity {
  @Type(() => VerifyBankcardBinCheckResultEntity)
  @ValidateNested()
  binCheckResult: VerifyBankcardBinCheckResultEntity;
}
