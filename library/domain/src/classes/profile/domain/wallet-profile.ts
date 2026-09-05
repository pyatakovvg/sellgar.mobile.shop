import { IsBoolean, IsOptional, IsString } from 'class-validator';

import { PROFILE_WALLET_TYPE_ANONYMOUS, PROFILE_WALLET_TYPE_VERIFIED } from './profile-wallet-type.constants.ts';

export class WalletProfile {
  @IsString()
  number: string;

  @IsString()
  type: typeof PROFILE_WALLET_TYPE_ANONYMOUS | typeof PROFILE_WALLET_TYPE_VERIFIED;

  @IsBoolean()
  isActive: boolean;

  @IsString()
  @IsOptional()
  ownerShortName?: string;

  @IsString()
  @IsOptional()
  maskedIin?: string;

  @IsString()
  @IsOptional()
  iin?: string;
}
