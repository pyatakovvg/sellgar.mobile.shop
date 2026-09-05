import { Inject, Injectable } from '@sellgar/app';

import type { WithdrawalInput } from '../data/gateway/input/withdrawal.input.ts';
import { VerifyBankcardResultEntity } from '../domain/verify-bankcard-result.entity.ts';

import { DraftOperationResultEntity } from '../../operation';

import { WithdrawalServiceInterface } from './withdrawal-service.interface.ts';

import { WithdrawalGatewayInterface } from '../data/gateway/withdrawal-gateway.interface.ts';

@Injectable()
export class WithdrawalService implements WithdrawalServiceInterface {
  constructor(@Inject(WithdrawalGatewayInterface) private readonly payMethodGateway: WithdrawalGatewayInterface) {}

  async confirmWithdrawalBankCard(operationUuid: string, code: string): Promise<DraftOperationResultEntity> {
    return await this.payMethodGateway.confirmWithdrawalBankCard(operationUuid, code);
  }

  async withdrawalToBankCard(values: WithdrawalInput): Promise<DraftOperationResultEntity> {
    return await this.payMethodGateway.withdrawalToBankCard(values);
  }

  async verifyBankCard(bin: string): Promise<VerifyBankcardResultEntity> {
    return await this.payMethodGateway.verifyBankCard(bin);
  }
}
