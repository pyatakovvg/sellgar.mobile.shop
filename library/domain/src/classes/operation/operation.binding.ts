import { BindingModuleInterface, type BindingRegistryInterface } from '@sellgar/app';

import { OperationGatewayInterface } from './data/gateway/operation-gateway.interface.ts';
import { OperationGateway } from './data/gateway/operation.gateway.ts';
import { OperationServiceInterface } from './application/operation-service.interface.ts';
import { OperationService } from './application/operation.service.ts';

export class OperationBinding extends BindingModuleInterface {
  register(registry: BindingRegistryInterface): void {
    registry.bind(OperationGatewayInterface).to(OperationGateway);
    registry.bind(OperationServiceInterface).to(OperationService);
  }
}
