import { Inject, Injectable } from '@sellgar/app';
import { validateOrReject } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { ConfigInterface } from '../../../../infrastructure/config';
import { DeviceInfoServiceInterface } from '../../../../infrastructure/device-info';
import { HttpRequest } from '../../../../infrastructure/http-client';
import { RequestExecutorDelegateInterface } from '../../../../infrastructure/request-executor-delegate';
import { PayMethodGatewayInterface } from './pay-method-gateway.interface.ts';

import type { PayMethodVerifyInput } from './input/pay-method-verify.input.ts';
import { PayMethodVerifyResultEntity } from '../../domain/pay-method-verify-result.entity.ts';
import type { MethodPayInput } from './input/method-pay.input.ts';

import { PayMethodResultEntity } from '../../domain/pay-method-result.entity.ts';
import { DraftOperationResultEntity } from '../../../operation';

@Injectable()
export class PayMethodGateway implements PayMethodGatewayInterface {
  constructor(
    @Inject(ConfigInterface) private readonly config: ConfigInterface,
    @Inject(DeviceInfoServiceInterface) private readonly deviceService: DeviceInfoServiceInterface,
    @Inject(RequestExecutorDelegateInterface) private readonly requestExecutor: RequestExecutorDelegateInterface,
  ) {}

  async pay(values: MethodPayInput): Promise<DraftOperationResultEntity> {
    const result = await this.requestExecutor.run({ scope: 'pay-methods:pay' }, async ({ signal }) => {
      const request = new HttpRequest({ clientDevice: await this.deviceService.getClientDeviceHeader(), signal });
      return request.post(this.config.get('GATEWAY_WALLETS_BFF_API') + '/v1/services/pay', values);
    });
    const resultInstance = plainToInstance(DraftOperationResultEntity, result);

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  async verify(values: PayMethodVerifyInput): Promise<PayMethodVerifyResultEntity> {
    const result = await this.requestExecutor.run({ scope: 'pay-methods:verify' }, async ({ signal }) => {
      const request = new HttpRequest({ clientDevice: await this.deviceService.getClientDeviceHeader(), signal });
      return request.post(this.config.get('GATEWAY_WALLETS_BFF_API') + '/v1/services/verify', values);
    });
    const resultInstance = plainToInstance(PayMethodVerifyResultEntity, result);

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  async getByGroupIdAndName(groupId: number, methodName: string) {
    const result = await this.requestExecutor.run(
      { scope: `pay-methods:get:${groupId}:${methodName}` },
      async ({ signal }) => {
        const request = new HttpRequest({ clientDevice: await this.deviceService.getClientDeviceHeader(), signal });
        return request.get(
          this.config.get('GATEWAY_WALLETS_BFF_API') + '/v1/services/groups/' + groupId + '/methods/' + methodName,
        );
      },
    );
    const resultInstance = plainToInstance(PayMethodResultEntity, result);

    await validateOrReject(resultInstance);

    return resultInstance;
  }
}
