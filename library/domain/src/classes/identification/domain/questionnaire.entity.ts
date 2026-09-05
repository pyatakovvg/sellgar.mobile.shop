import { IsBoolean, IsEmail, IsOptional, IsString } from 'class-validator';

import {
  IDENTIFICATION_CITIZENSHIP_KZ,
  IDENTIFICATION_OCCUPATION_BUSINESS_OWNER,
  IDENTIFICATION_OCCUPATION_EMPLOYED,
  IDENTIFICATION_OCCUPATION_UNEMPLOYED,
} from './identification.constants.ts';

export class QuestionnaireEntity {
  @IsString()
  phone: string;

  @IsString()
  @IsOptional()
  iin?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  citizenship?: typeof IDENTIFICATION_CITIZENSHIP_KZ;

  @IsString()
  @IsOptional()
  occupation?:
    | typeof IDENTIFICATION_OCCUPATION_EMPLOYED
    | typeof IDENTIFICATION_OCCUPATION_UNEMPLOYED
    | typeof IDENTIFICATION_OCCUPATION_BUSINESS_OWNER;

  @IsString()
  @IsOptional()
  occupationEmployedWork?: string;

  @IsString()
  @IsOptional()
  occupationEmployedPosition?: string;

  @IsBoolean()
  @IsOptional()
  isPep?: boolean;

  @IsBoolean()
  @IsOptional()
  fundsOriginWages?: boolean;

  @IsBoolean()
  @IsOptional()
  fundsOriginDividends?: boolean;

  @IsBoolean()
  @IsOptional()
  fundsOriginOther?: boolean;

  @IsString()
  @IsOptional()
  fundsOriginOtherDetails?: string;
}
