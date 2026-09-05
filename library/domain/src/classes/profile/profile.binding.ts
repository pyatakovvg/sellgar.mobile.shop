import { BindingModuleInterface, type BindingRegistryInterface } from '@sellgar/app';

import { ProfileGatewayInterface } from './data/gateway/profile-gateway.interface.ts';
import { ProfileGateway } from './data/gateway/profile.gateway.ts';
import { ProfileServiceInterface } from './application/profile-service.interface.ts';
import { ProfileService } from './application/profile.service.ts';

export class ProfileBinding extends BindingModuleInterface {
  register(registry: BindingRegistryInterface): void {
    registry.bind(ProfileGatewayInterface).to(ProfileGateway);
    registry.bind(ProfileServiceInterface).to(ProfileService);
  }
}
