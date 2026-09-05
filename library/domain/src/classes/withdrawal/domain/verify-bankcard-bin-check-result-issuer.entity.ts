import { IsString } from 'class-validator';

export class VerifyBankcardBinCheckResultIssuerEntity {
  @IsString()
  name: string;

  @IsString()
  commonName: string;

  @IsString()
  country: string;
}
