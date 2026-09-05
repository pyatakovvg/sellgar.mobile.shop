import { IsString } from 'class-validator';

export class PendingIdentificationEntity {
  @IsString()
  requestUuid: string;

  @IsString()
  identificationLink: string;

  @IsString()
  expiresAt: string;
}
