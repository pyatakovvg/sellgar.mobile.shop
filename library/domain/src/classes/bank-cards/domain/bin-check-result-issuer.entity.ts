import { IsString } from 'class-validator';

export class BinCheckResultIssuerEntity {
  @IsString()
  name: string;

  @IsString()
  commonName: string;

  @IsString()
  country: string;
}
