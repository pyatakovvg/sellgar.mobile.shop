import { BindingModuleInterface, type BindingRegistryInterface } from '@sellgar/app';

import { IdentificationGatewayInterface } from './data/gateway/identification-gateway.interface.ts';
import { IdentificationGateway } from './data/gateway/identification.gateway.ts';
import { IdentificationServiceInterface } from './application/identification-service.interface.ts';
import { IdentificationService } from './application/identification.service.ts';

export class IdentificationBinding extends BindingModuleInterface {
  register(registry: BindingRegistryInterface): void {
    registry.bind(IdentificationGatewayInterface).to(IdentificationGateway);
    registry.bind(IdentificationServiceInterface).to(IdentificationService);
  }
}
