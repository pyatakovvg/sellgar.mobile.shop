import { MobileVersionEntity } from '../domain/mobile-version.entity.ts';

export abstract class MobileVersionServiceInterface {
  abstract check(): Promise<MobileVersionEntity>;
}
