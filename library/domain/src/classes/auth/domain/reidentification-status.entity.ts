import { IsIn, IsOptional, IsString } from 'class-validator';

export class ReidentificationStatusEntity {
  @IsString()
  uuid: string;

  @IsIn(['Created', 'Success', 'Failed', 'Expired'])
  status: 'Created' | 'Success' | 'Failed' | 'Expired';

  @IsOptional()
  @IsString()
  errorCode?: string | null;

  @IsOptional()
  @IsString()
  identificationLink?: string;

  @IsString()
  expiresAt: string;
}
