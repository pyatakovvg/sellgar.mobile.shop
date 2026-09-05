import { IsString, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

import { PayMethodOptionEntity } from './pay-method-option.entity.ts';
import { PayMethodAppearanceEntity } from './pay-method-appearance.entity.ts';

export class PayMethodEntity {
  @IsString()
  method: string;

  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @ValidateNested()
  @Type(() => PayMethodOptionEntity)
  options: PayMethodOptionEntity[];

  @ValidateNested()
  @Type(() => PayMethodAppearanceEntity)
  appearance: PayMethodAppearanceEntity;
}
