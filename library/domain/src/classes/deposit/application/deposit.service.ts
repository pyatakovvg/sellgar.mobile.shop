import { Inject, Injectable } from '@sellgar/app';

import { DepositServiceInterface } from './deposit-service.interface.ts';
import { DepositGatewayInterface } from '../data/gateway/deposit-gateway.interface.ts';

import type { DepositCreateInput } from '../data/gateway/input/deposit-create.input.ts';

@Injectable()
export class DepositService implements DepositServiceInterface {
  constructor(@Inject(DepositGatewayInterface) private readonly depositGateway: DepositGatewayInterface) {}

  async getDetails(method: string) {
    const result = await this.depositGateway.getDetails(method);
    return result.data;
  }
  async create(dto: DepositCreateInput) {
    const result = await this.depositGateway.create(dto);
    return result.data;
  }
}
