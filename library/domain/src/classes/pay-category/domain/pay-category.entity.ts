import { IsString, IsNumber, IsOptional, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

import { PayMethodEntity } from '../../pay-method';

export class PayCategoryEntity {
  @IsNumber()
  id: number;

  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsArray()
  @ValidateNested()
  @Type(() => PayMethodEntity)
  methods: PayMethodEntity[];
}
