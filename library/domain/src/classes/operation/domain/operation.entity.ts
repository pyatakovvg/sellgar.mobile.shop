import { Type } from 'class-transformer';
import { ValidateNested, IsNumber, IsString, IsDateString, IsOptional } from 'class-validator';

import { TOperationType } from './operation-type.type.ts';
import { OperationStatusEntity } from './operation-status.entity.ts';
import { OperationPendingDataEntity } from './operation-pending-data.entity.ts';
import { OperationRequisitesEntity } from './operation-requisites.entity.ts';

export class OperationEntity {
  @IsString()
  uuid: string;

  @IsNumber()
  @IsOptional()
  token?: number;

  @IsString()
  type: TOperationType;

  @IsString()
  description: string;

  @Type(() => OperationStatusEntity)
  @ValidateNested()
  status: OperationStatusEntity;

  @IsNumber()
  totalAmount: number;

  @IsNumber()
  fee: number;

  @IsNumber()
  amount: number;

  @IsString()
  currency: string;

  @IsDateString()
  createdAt: string;

  @IsOptional()
  @Type(() => OperationPendingDataEntity)
  @ValidateNested()
  pendingData: OperationPendingDataEntity;

  @IsOptional()
  @Type(() => OperationRequisitesEntity)
  @ValidateNested()
  requisites: OperationRequisitesEntity;
}
