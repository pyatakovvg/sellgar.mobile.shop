import {
  IDENTIFICATION_OCCUPATION_EMPLOYED,
  IDENTIFICATION_OCCUPATION_UNEMPLOYED,
  IDENTIFICATION_OCCUPATION_BUSINESS_OWNER,
  IDENTIFICATION_CITIZENSHIP_KZ,
} from '../../../domain/identification.constants.ts';

export interface IdentificationInput {
  requestUuid: string;
  phone: string;
  iin: string;
  email?: string;
  citizenship: typeof IDENTIFICATION_CITIZENSHIP_KZ;
  occupation:
    | typeof IDENTIFICATION_OCCUPATION_EMPLOYED
    | typeof IDENTIFICATION_OCCUPATION_UNEMPLOYED
    | typeof IDENTIFICATION_OCCUPATION_BUSINESS_OWNER;

  occupationEmployedWork?: string;
  occupationEmployedPosition?: string;
  isPep: string;
  fundsOriginWages?: string;
  fundsOriginDividends?: string;
  fundsOriginOther?: string;
  fundsOriginOtherDetails?: string;
}
