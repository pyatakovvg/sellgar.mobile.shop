import { IsString, IsUrl } from 'class-validator';

export class IdentificationEntity {
  @IsString()
  @IsUrl()
  url: string;
}
