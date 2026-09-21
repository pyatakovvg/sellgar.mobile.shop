import { Inject, Injectable } from '@sellgar/app';
import { validateOrReject } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { ConfigInterface } from '../../../../infrastructure/config';
import { DeviceInfoServiceInterface } from '../../../../infrastructure/device-info';
import { HttpRequest } from '../../../../infrastructure/http-client';
import { RequestExecutorDelegateInterface } from '../../../../infrastructure/request-executor-delegate';

import { WithdrawalGatewayInterface } from './withdrawal-gateway.interface.ts';

import type { WithdrawalInput } from './input/withdrawal.input.ts';
import { VerifyBankcardResultEntity } from '../../domain/verify-bankcard-result.entity.ts';

import { DraftOperationResultEntity } from '../../../operation';

@Injectable()
export class WithdrawalGateway implements WithdrawalGatewayInterface {
  constructor(
    @Inject(ConfigInterface) private readonly config: ConfigInterface,
    @Inject(DeviceInfoServiceInterface) private readonly deviceService: DeviceInfoServiceInterface,
    @Inject(RequestExecutorDelegateInterface) private readonly requestExecutor: RequestExecutorDelegateInterface,
  ) {}

  async confirmWithdrawalBankCard(operationUuid: string, code: string): Promise<DraftOperationResultEntity> {
    const result = await this.requestExecutor.run(
      { scope: `withdrawal:bank-card:confirm:${operationUuid}` },
      async ({ signal }) => {
        const request = new HttpRequest({ clientDevice: await this.deviceService.getClientDeviceHeader(), signal });
        return request.post(
          this.config.get('GATEWAY_WALLETS_BFF_API') + '/v1/withdrawals/bank-card/' + operationUuid + '/confirm',
          { code },
        );
      },
    );
    const resultInstance = plainToInstance(DraftOperationResultEntity, result);

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  async withdrawalToBankCard(values: WithdrawalInput): Promise<DraftOperationResultEntity> {
    const result = await this.requestExecutor.run({ scope: 'withdrawal:bank-card:create' }, async ({ signal }) => {
      const request = new HttpRequest({ clientDevice: await this.deviceService.getClientDeviceHeader(), signal });
      return request.post(this.config.get('GATEWAY_WALLETS_BFF_API') + '/v1/withdrawals/bank-card', values);
    });
    const resultInstance = plainToInstance(DraftOperationResultEntity, result);

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  async verifyBankCard(bin: string): Promise<VerifyBankcardResultEntity> {
    const result = await this.requestExecutor.run({ scope: 'withdrawal:bank-card:verify' }, async ({ signal }) => {
      const request = new HttpRequest({ clientDevice: await this.deviceService.getClientDeviceHeader(), signal });
      return request.post(this.config.get('GATEWAY_WALLETS_BFF_API') + '/v1/withdrawals/bank-card/verify', { bin });
    });
    const resultInstance = plainToInstance(VerifyBankcardResultEntity, result);

    await validateOrReject(resultInstance);

    return resultInstance;
  }
}
