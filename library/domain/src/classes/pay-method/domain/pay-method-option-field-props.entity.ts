import { IsString, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

export class PayMethodOptionFieldPropsEntity {
  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  caption: string;

  @IsString()
  @IsOptional()
  @Transform(({ value }) => value.replaceAll('_', '9'))
  mask: string;

  @IsString()
  @IsOptional()
  regexp: string;

  @IsString()
  @IsOptional()
  defaultValue: string;

  @IsString()
  @IsOptional()
  replace: string;
}
