import { Inject, Injectable } from '@sellgar/app';

import { OperationServiceInterface } from './operation-service.interface.ts';
import { OperationGatewayInterface } from '../data/gateway/operation-gateway.interface.ts';

import type { OperationParamsInput } from '../data/gateway/input/operation-params.input.ts';

import { OperationPollingAttemptsExceededError } from './error/operation-polling-attempts-exceeded.error.ts';

@Injectable()
export class OperationService implements OperationServiceInterface {
  constructor(@Inject(OperationGatewayInterface) private readonly operationGateway: OperationGatewayInterface) {}

  async getByUuid(uuid: string) {
    return await this.operationGateway.getByUuid(uuid);
  }

  async waitForFinalStatus(uuid: string, count: number) {
    let retries = 0;
    while (retries <= count) {
      const result = await this.operationGateway.getByUuid(uuid);
      if (result.data && ['Failed', 'Succeeded', 'ProviderAccepted'].includes(result.data.status.type)) {
        return result;
      }
      retries++;
      if (retries < count) {
        await new Promise<void>((resolve) => setTimeout(resolve, 1000));
      }
    }
    throw new OperationPollingAttemptsExceededError();
  }

  async getAll(params: OperationParamsInput) {
    const result = await this.operationGateway.getAll(params);

    return {
      success: true,
      data: result.data.map((operation) => {
        if (operation.type === 'Withdrawal' || operation.type === 'PayService') {
          return {
            ...operation,
            totalAmount: operation.totalAmount > 0 ? operation.totalAmount * -1 : operation.totalAmount,
          };
        }
        if (operation.type === 'MerchantPayment') {
          return {
            ...operation,
            totalAmount: operation.totalAmount * -1,
          };
        }
        return operation;
      }),
      meta: result.meta,
    };
  }
}
