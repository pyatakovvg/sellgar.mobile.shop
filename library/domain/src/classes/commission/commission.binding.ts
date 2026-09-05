import { BindingModuleInterface, type BindingRegistryInterface } from '@sellgar/app';

import { CommissionGatewayInterface } from './data/gateway/commission-gateway.interface.ts';
import { CommissionGateway } from './data/gateway/commission.gateway.ts';
import { CommissionServiceInterface } from './application/commission-service.interface.ts';
import { CommissionService } from './application/commission.service.ts';

export class CommissionBinding extends BindingModuleInterface {
  register(registry: BindingRegistryInterface): void {
    registry.bind(CommissionGatewayInterface).to(CommissionGateway);
    registry.bind(CommissionServiceInterface).to(CommissionService);
  }
}
