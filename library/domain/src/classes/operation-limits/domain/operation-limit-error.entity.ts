import { IsOptional, IsString } from 'class-validator';

export class OperationLimitErrorEntity {
  @IsString()
  @IsOptional()
  category?: string;

  @IsString()
  @IsOptional()
  code?: string;

  @IsString()
  @IsOptional()
  message?: string;
}
