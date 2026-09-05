import { BindingModuleInterface, type BindingRegistryInterface } from '@sellgar/app';

import { PayMethodGatewayInterface } from './data/gateway/pay-method-gateway.interface.ts';
import { PayMethodGateway } from './data/gateway/pay-method.gateway.ts';
import { PayMethodServiceInterface } from './application/pay-method-service.interface.ts';
import { PayMethodService } from './application/pay-method.service.ts';

export class PayMethodBinding extends BindingModuleInterface {
  register(registry: BindingRegistryInterface): void {
    registry.bind(PayMethodGatewayInterface).to(PayMethodGateway);
    registry.bind(PayMethodServiceInterface).to(PayMethodService);
  }
}
