import { Inject, Injectable } from '@sellgar/app';

import { BalanceServiceInterface } from './balance-service.interface.ts';
import { BalanceGatewayInterface } from '../data/gateway/balance-gateway.interface.ts';

@Injectable()
export class BalanceService implements BalanceServiceInterface {
  constructor(@Inject(BalanceGatewayInterface) private readonly walletGateway: BalanceGatewayInterface) {}

  getAll() {
    return this.walletGateway.getAll();
  }
}
