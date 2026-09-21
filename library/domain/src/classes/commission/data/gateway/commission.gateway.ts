import { Inject, Injectable } from '@sellgar/app';
import { validateOrReject } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { ConfigInterface } from '../../../../infrastructure/config';
import { DeviceInfoServiceInterface } from '../../../../infrastructure/device-info';
import { HttpRequest } from '../../../../infrastructure/http-client';
import { RequestExecutorDelegateInterface } from '../../../../infrastructure/request-executor-delegate';
import { CommissionGatewayInterface } from './commission-gateway.interface.ts';

import type { CommissionCalculateInput } from './input/commission-calculate.input.ts';

import { CommissionResultEntity } from '../../domain/commission-result.entity.ts';

@Injectable()
export class CommissionGateway implements CommissionGatewayInterface {
  constructor(
    @Inject(ConfigInterface) private readonly config: ConfigInterface,
    @Inject(DeviceInfoServiceInterface) private readonly deviceService: DeviceInfoServiceInterface,
    @Inject(RequestExecutorDelegateInterface) private readonly requestExecutor: RequestExecutorDelegateInterface,
  ) {}

  async calculate(data: CommissionCalculateInput): Promise<CommissionResultEntity> {
    const result = await this.requestExecutor.run({ scope: 'commissions:calculate' }, async ({ signal }) => {
      const request = new HttpRequest({ clientDevice: await this.deviceService.getClientDeviceHeader(), signal });
      return request.post(this.config.get('GATEWAY_WALLETS_BFF_API') + '/v1/commissions/calculate', data);
    });
    const resultInstance = plainToInstance(CommissionResultEntity, result);

    await validateOrReject(resultInstance);

    return resultInstance;
  }
}
