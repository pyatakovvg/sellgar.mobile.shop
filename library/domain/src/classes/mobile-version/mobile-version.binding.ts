import { BindingModuleInterface, type BindingRegistryInterface } from '@sellgar/app';

import { MobileVersionGatewayInterface } from './data/gateway/mobile-version-gateway.interface.ts';
import { MobileVersionGateway } from './data/gateway/mobile-version.gateway.ts';
import { MobileVersionServiceInterface } from './application/mobile-version-service.interface.ts';
import { MobileVersionService } from './application/mobile-version.service.ts';

export class MobileVersionBinding extends BindingModuleInterface {
  register(registry: BindingRegistryInterface): void {
    registry.bind(MobileVersionGatewayInterface).to(MobileVersionGateway);
    registry.bind(MobileVersionServiceInterface).to(MobileVersionService);
  }
}
