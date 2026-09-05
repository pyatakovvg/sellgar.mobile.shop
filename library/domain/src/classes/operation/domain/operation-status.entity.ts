import { IsString, IsDateString } from 'class-validator';

export class OperationStatusEntity {
  @IsString()
  type: 'Processing' | 'ProviderAccepted' | 'Pending' | 'Failed' | 'Succeeded';

  @IsDateString()
  occurredAt: string;
}
