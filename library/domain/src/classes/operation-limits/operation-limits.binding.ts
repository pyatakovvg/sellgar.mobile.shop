import { BindingModuleInterface, type BindingRegistryInterface } from '@sellgar/app';

import { OperationLimitsGatewayInterface } from './data/gateway/operation-limits-gateway.interface.ts';
import { OperationLimitsGateway } from './data/gateway/operation-limits.gateway.ts';
import { OperationLimitsServiceInterface } from './application/operation-limits-service.interface.ts';
import { OperationLimitsService } from './application/operation-limits.service.ts';

export class OperationLimitsBinding extends BindingModuleInterface {
  register(registry: BindingRegistryInterface): void {
    registry.bind(OperationLimitsGatewayInterface).to(OperationLimitsGateway);
    registry.bind(OperationLimitsServiceInterface).to(OperationLimitsService);
  }
}
