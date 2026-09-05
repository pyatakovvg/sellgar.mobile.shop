import { MOBILE_VERSION_CHECK_PLATFORMS } from './mobile-version-check-platforms.ts';

export type MobileVersionCheckPlatform = (typeof MOBILE_VERSION_CHECK_PLATFORMS)[number];
