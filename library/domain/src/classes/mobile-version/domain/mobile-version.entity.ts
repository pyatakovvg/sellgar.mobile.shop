import { IsIn, IsString } from 'class-validator';

import { MobileVersionStatus } from './mobile-version-status.type.ts';
import { MOBILE_VERSION_STATUSES } from './mobile-version-status.constants.ts';

export class MobileVersionEntity {
  @IsIn(MOBILE_VERSION_STATUSES)
  status: MobileVersionStatus;

  @IsString()
  latest: string;

  @IsString()
  recommended: string;

  @IsString()
  minimum: string;
}
