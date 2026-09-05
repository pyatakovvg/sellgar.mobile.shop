import { IsString, IsOptional } from 'class-validator';

export class OperationRequisitesEntity {
  @IsOptional()
  @IsString()
  method: string;

  @IsOptional()
  @IsString()
  account: string;
}
