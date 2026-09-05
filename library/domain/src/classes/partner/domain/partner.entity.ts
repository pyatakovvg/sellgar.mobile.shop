import { IsString } from 'class-validator';

export class PartnerEntity {
  @IsString()
  uuid: string;

  @IsString()
  city?: string;

  @IsString()
  address: string;

  @IsString()
  title: string;
}
