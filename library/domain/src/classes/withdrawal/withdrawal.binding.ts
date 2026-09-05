import { BindingModuleInterface, type BindingRegistryInterface } from '@sellgar/app';

import { WithdrawalGatewayInterface } from './data/gateway/withdrawal-gateway.interface.ts';
import { WithdrawalGateway } from './data/gateway/withdrawal.gateway.ts';
import { WithdrawalServiceInterface } from './application/withdrawal-service.interface.ts';
import { WithdrawalService } from './application/withdrawal.service.ts';

export class WithdrawalBinding extends BindingModuleInterface {
  register(registry: BindingRegistryInterface): void {
    registry.bind(WithdrawalGatewayInterface).to(WithdrawalGateway);
    registry.bind(WithdrawalServiceInterface).to(WithdrawalService);
  }
}
