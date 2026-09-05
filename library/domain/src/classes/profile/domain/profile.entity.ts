import { Type } from 'class-transformer';
import { ValidateNested, IsString } from 'class-validator';

import { WalletProfile } from './wallet-profile.ts';

export class ProfileEntity {
  @Type(() => WalletProfile)
  @ValidateNested()
  wallet: WalletProfile;

  @IsString()
  login: string;

  @IsString()
  uuid: string;
}
