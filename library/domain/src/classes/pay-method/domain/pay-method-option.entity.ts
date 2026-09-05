import { IsString, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

import { PayMethodOptionFieldEntity } from './pay-method-option-field.entity.ts';

export class PayMethodOptionEntity {
  @IsString()
  key: string;

  @IsString()
  @IsOptional()
  title?: string;

  @ValidateNested()
  @Type(() => PayMethodOptionFieldEntity)
  fields: PayMethodOptionFieldEntity[];
}
