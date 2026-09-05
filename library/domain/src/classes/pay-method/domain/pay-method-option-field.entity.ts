import { IsString, IsBoolean, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

import {
  PAY_METHOD_OPTION_FIELD_TYPE_DATE,
  PAY_METHOD_OPTION_FIELD_TYPE_INPUT,
  PAY_METHOD_OPTION_FIELD_TYPE_HIDDEN,
} from './pay-method.constants.ts';

import { PayMethodOptionFieldPropsEntity } from './pay-method-option-field-props.entity.ts';

export class PayMethodOptionFieldEntity {
  @IsString()
  type:
    | typeof PAY_METHOD_OPTION_FIELD_TYPE_DATE
    | typeof PAY_METHOD_OPTION_FIELD_TYPE_INPUT
    | typeof PAY_METHOD_OPTION_FIELD_TYPE_HIDDEN;

  @IsString()
  name: string;

  @IsBoolean()
  @IsOptional()
  required: boolean;

  @ValidateNested()
  @Type(() => PayMethodOptionFieldPropsEntity)
  props: PayMethodOptionFieldPropsEntity;
}
