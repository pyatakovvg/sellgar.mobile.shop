import { ProfileResultEntity } from '../domain/profile-result.entity.ts';

export abstract class ProfileServiceInterface {
  abstract get(): Promise<ProfileResultEntity>;
}
