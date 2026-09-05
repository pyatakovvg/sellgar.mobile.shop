import { Inject, Injectable } from '@sellgar/app';

import type { CommissionCalculateInput } from '../data/gateway/input/commission-calculate.input.ts';

import { CommissionGatewayInterface } from '../data/gateway/commission-gateway.interface.ts';

import { CommissionResultEntity } from '../domain/commission-result.entity.ts';
import { CommissionServiceInterface } from './commission-service.interface.ts';

@Injectable()
export class CommissionService implements CommissionServiceInterface {
  constructor(@Inject(CommissionGatewayInterface) private readonly commissionGateway: CommissionGatewayInterface) {}

  async calculate(data: CommissionCalculateInput): Promise<CommissionResultEntity> {
    return await this.commissionGateway.calculate(data);
  }
}
