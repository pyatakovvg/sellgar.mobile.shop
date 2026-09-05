import { HttpException, Inject, Injectable } from '@sellgar/app';

import { OperationLimitsServiceInterface } from './operation-limits-service.interface.ts';
import { OperationLimitsGatewayInterface } from '../data/gateway/operation-limits-gateway.interface.ts';

import type { OperationLimitsInput } from '../data/gateway/input/operation-limits.input.ts';
import { OperationLimitsAvailableResultEntity } from '../domain/operation-limits-available-result.entity.ts';
import { OperationLimitsResultEntity } from '../domain/operation-limits-result.entity.ts';
import { InsufficientFundsError } from './error/insufficient-funds.error.ts';
import { LimitUnavailableError } from './error/limit-unavailable.error.ts';

const INSUFFICIENT_FUNDS_CODE = '222';

@Injectable()
export class OperationLimitsService implements OperationLimitsServiceInterface {
  constructor(
    @Inject(OperationLimitsGatewayInterface) private readonly operationLimitsGateway: OperationLimitsGatewayInterface,
  ) {}

  private _getErrorCode(error: unknown): string | undefined {
    if (error instanceof HttpException) {
      const response = error.response;

      if (typeof response === 'object' && response !== null) {
        const errorPayload = Reflect.get(response, 'error');

        if (typeof errorPayload === 'object' && errorPayload !== null) {
          const code = Reflect.get(errorPayload, 'code');
          return typeof code === 'string' ? code : undefined;
        }
      }
    }
  }

  private _isInsufficientFundsCode(code?: string): boolean {
    return code === INSUFFICIENT_FUNDS_CODE;
  }

  async getLimits(params: OperationLimitsInput): Promise<OperationLimitsAvailableResultEntity> {
    let result: OperationLimitsResultEntity;

    try {
      result = await this.operationLimitsGateway.getLimits(params);
    } catch (error) {
      if (this._isInsufficientFundsCode(this._getErrorCode(error))) {
        throw new InsufficientFundsError();
      }

      throw error;
    }

    if (!result.success) {
      if (this._isInsufficientFundsCode(result.error?.code)) {
        throw new InsufficientFundsError();
      }

      throw new LimitUnavailableError();
    }

    if (!result.data?.isAllowed || !result.data.allowedAmount) {
      throw new LimitUnavailableError();
    }

    return result as OperationLimitsAvailableResultEntity;
  }
}
