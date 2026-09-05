import { BindingModuleInterface, type BindingRegistryInterface } from '@sellgar/app';

import { BalanceGatewayInterface } from './data/gateway/balance-gateway.interface.ts';
import { BalanceGateway } from './data/gateway/balance.gateway.ts';
import { BalanceServiceInterface } from './application/balance-service.interface.ts';
import { BalanceService } from './application/balance.service.ts';

export class BalanceBinding extends BindingModuleInterface {
  register(registry: BindingRegistryInterface): void {
    registry.bind(BalanceGatewayInterface).to(BalanceGateway);
    registry.bind(BalanceServiceInterface).to(BalanceService);
  }
}
