import { Type } from 'class-transformer';
import { ValidateNested, IsString, IsOptional } from 'class-validator';

import { PendingDetailsEntity } from './pending-details.entity.ts';

export class ChangePhoneEntity {
  @IsOptional()
  @Type(() => PendingDetailsEntity)
  @ValidateNested()
  pendingDetails?: PendingDetailsEntity;

  @IsString()
  status: 'Pending' | 'Succeeded' | 'Failed' | 'Processing';

  @IsString()
  uuid: string;
}
