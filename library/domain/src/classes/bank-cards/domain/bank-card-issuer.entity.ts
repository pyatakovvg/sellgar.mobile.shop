import { IsString } from 'class-validator';

export class BankCardIssuerEntity {
  @IsString()
  name: string;

  @IsString()
  commonName: string;

  @IsString()
  country: string;
}
