import { Type } from 'class-transformer';
import { IsIn, ValidateNested } from 'class-validator';
import { PendingIdentificationEntity } from './pending-identification.entity.ts';

export class LoginPendingIdentificationEntity {
  @IsIn(['PendingIdentification'])
  nextAction: 'PendingIdentification';

  @Type(() => PendingIdentificationEntity)
  @ValidateNested()
  data: PendingIdentificationEntity;
}
