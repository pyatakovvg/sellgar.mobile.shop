import { Inject, Injectable, RequestExecutorInterface } from '@sellgar/app';
import { validateOrReject } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { ConfigInterface } from '../../../../infrastructure/config';
import { DeviceInfoServiceInterface } from '../../../../infrastructure/device-info';
import { HttpRequest } from '../../../../infrastructure/http-client';
import { BalanceGatewayInterface } from './balance-gateway.interface.ts';

import { BalanceResultEntity } from '../../domain/balance-result.entity.ts';

@Injectable()
export class BalanceGateway implements BalanceGatewayInterface {
  constructor(
    @Inject(ConfigInterface) private readonly config: ConfigInterface,
    @Inject(DeviceInfoServiceInterface) private readonly deviceService: DeviceInfoServiceInterface,
    @Inject(RequestExecutorInterface) private readonly requestExecutor: RequestExecutorInterface,
  ) {}

  async getAll(): Promise<BalanceResultEntity> {
    const result = await this.requestExecutor.run({ scope: 'balances:list' }, async ({ signal }) => {
      const request = new HttpRequest({ deviceId: await this.deviceService.getDeviceUniqueId(), signal });
      return request.get(this.config.get('GATEWAY_WALLETS_BFF_API') + '/v1/wallets/current/balances');
    });
    const resultInstance = plainToInstance(BalanceResultEntity, result);

    await validateOrReject(resultInstance);

    return resultInstance;
  }
}
