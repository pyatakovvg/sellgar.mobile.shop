import { IsIn, IsString } from 'class-validator';
import { MobileVersionCheckPlatform } from './mobile-version-check-platform.type.ts';
import { MOBILE_VERSION_CHECK_PLATFORMS } from './mobile-version-check-platforms.ts';

export class MobileVersionCheckDto {
  @IsIn(MOBILE_VERSION_CHECK_PLATFORMS)
  platform: MobileVersionCheckPlatform;

  @IsString()
  version: string;
}
