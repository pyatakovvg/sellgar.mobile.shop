import { Type } from 'class-transformer';
import { IsNumber, IsString, IsOptional, ValidateNested } from 'class-validator';

import { MetaScrollEntity } from './meta-scroll.entity.ts';

export class MetaEntity {
  @IsString()
  @IsOptional()
  correlationId?: string;

  @IsNumber()
  @IsOptional()
  totalRows?: number;

  @IsOptional()
  @ValidateNested()
  @Type(() => MetaScrollEntity)
  scroll?: MetaScrollEntity;
}
