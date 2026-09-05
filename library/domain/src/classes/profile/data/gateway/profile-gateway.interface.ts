import { ProfileResultEntity } from '../../domain/profile-result.entity.ts';

export abstract class ProfileGatewayInterface {
  abstract get(): Promise<ProfileResultEntity>;
}
