import { BindingModuleInterface, type BindingRegistryInterface } from '@sellgar/app';

import { FeaturesGatewayInterface } from './data/gateway/features-gateway.interface.ts';
import { FeaturesGateway } from './data/gateway/features.gateway.ts';
import { FeaturesServiceInterface } from './application/features-service.interface.ts';
import { FeaturesService } from './application/features.service.ts';

export class FeaturesBinding extends BindingModuleInterface {
  register(registry: BindingRegistryInterface): void {
    registry.bind(FeaturesGatewayInterface).to(FeaturesGateway);
    registry.bind(FeaturesServiceInterface).to(FeaturesService);
  }
}
