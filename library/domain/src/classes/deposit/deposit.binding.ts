import { BindingModuleInterface, type BindingRegistryInterface } from '@sellgar/app';

import { DepositGatewayInterface } from './data/gateway/deposit-gateway.interface.ts';
import { DepositGateway } from './data/gateway/deposit.gateway.ts';
import { DepositServiceInterface } from './application/deposit-service.interface.ts';
import { DepositService } from './application/deposit.service.ts';

export class DepositBinding extends BindingModuleInterface {
  register(registry: BindingRegistryInterface): void {
    registry.bind(DepositGatewayInterface).to(DepositGateway);
    registry.bind(DepositServiceInterface).to(DepositService);
  }
}
