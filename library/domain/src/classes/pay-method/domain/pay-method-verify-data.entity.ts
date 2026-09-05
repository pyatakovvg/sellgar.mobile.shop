import { IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import {
  PAY_METHOD_STATUS_VERIFY_SUCCESS,
  PAY_METHOD_STATUS_VERIFY_FAILED,
  PAY_METHOD_STATUS_VERIFY_NOT_SUPPORTED,
} from './pay-method.constants.ts';
import { PayMethodVerifyProviderOptionsEntity } from './pay-method-verify-provider-options.entity.ts';
import { PayMethodVerifyWalletLimitsEntity } from './pay-method-verify-wallet-limits.entity.ts';

export class PayMethodVerifyDataEntity {
  @IsString()
  status:
    | typeof PAY_METHOD_STATUS_VERIFY_FAILED
    | typeof PAY_METHOD_STATUS_VERIFY_SUCCESS
    | typeof PAY_METHOD_STATUS_VERIFY_NOT_SUPPORTED;

  @IsString()
  @IsOptional()
  reason: string | null;

  @IsString()
  @IsOptional()
  errorCode: string | null;

  @IsOptional()
  @Type(() => PayMethodVerifyProviderOptionsEntity)
  @ValidateNested()
  providerOptions: PayMethodVerifyProviderOptionsEntity;

  @Type(() => PayMethodVerifyWalletLimitsEntity)
  @ValidateNested()
  walletLimits: PayMethodVerifyWalletLimitsEntity;
}
