import { Expose } from 'class-transformer';
import { IsEmail, IsIn, IsOptional, IsString } from 'class-validator';

import {
  IDENTIFICATION_CITIZENSHIP_KZ,
  IDENTIFICATION_OCCUPATION_BUSINESS_OWNER,
  IDENTIFICATION_OCCUPATION_EMPLOYED,
  IDENTIFICATION_OCCUPATION_UNEMPLOYED,
} from '../../../domain/identification.constants.ts';
import type { IdentificationInput } from '../input/identification.input.ts';

export class IdentificationDto implements IdentificationInput {
  @Expose()
  @IsString()
  requestUuid: string;

  @Expose()
  @IsString()
  phone: string;

  @Expose()
  @IsString()
  iin: string;

  @Expose()
  @IsEmail()
  @IsOptional()
  email?: string;

  @Expose()
  @IsIn([IDENTIFICATION_CITIZENSHIP_KZ])
  citizenship: typeof IDENTIFICATION_CITIZENSHIP_KZ;

  @Expose()
  @IsIn([
    IDENTIFICATION_OCCUPATION_EMPLOYED,
    IDENTIFICATION_OCCUPATION_UNEMPLOYED,
    IDENTIFICATION_OCCUPATION_BUSINESS_OWNER,
  ])
  occupation:
    | typeof IDENTIFICATION_OCCUPATION_EMPLOYED
    | typeof IDENTIFICATION_OCCUPATION_UNEMPLOYED
    | typeof IDENTIFICATION_OCCUPATION_BUSINESS_OWNER;

  @Expose()
  @IsString()
  @IsOptional()
  occupationEmployedWork?: string;

  @Expose()
  @IsString()
  @IsOptional()
  occupationEmployedPosition?: string;

  @Expose()
  @IsString()
  isPep: string;

  @Expose()
  @IsString()
  @IsOptional()
  fundsOriginWages?: string;

  @Expose()
  @IsString()
  @IsOptional()
  fundsOriginDividends?: string;

  @Expose()
  @IsString()
  @IsOptional()
  fundsOriginOther?: string;

  @Expose()
  @IsString()
  @IsOptional()
  fundsOriginOtherDetails?: string;
}
