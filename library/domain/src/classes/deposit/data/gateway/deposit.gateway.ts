import { Inject, Injectable, RequestExecutorInterface } from '@sellgar/app';
import { validateOrReject } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { ConfigInterface } from '../../../../infrastructure/config';
import { DeviceInfoServiceInterface } from '../../../../infrastructure/device-info';
import { HttpRequest } from '../../../../infrastructure/http-client';
import { DepositGatewayInterface } from './deposit-gateway.interface.ts';

import { DepositDetailsResultEntity } from '../../domain/deposit-details-result.entity.ts';

import type { DepositCreateInput } from './input/deposit-create.input.ts';
import { DraftOperationResultEntity } from '../../../operation';

@Injectable()
export class DepositGateway implements DepositGatewayInterface {
  constructor(
    @Inject(ConfigInterface) private readonly config: ConfigInterface,
    @Inject(DeviceInfoServiceInterface) private readonly deviceService: DeviceInfoServiceInterface,
    @Inject(RequestExecutorInterface) private readonly requestExecutor: RequestExecutorInterface,
  ) {}

  async getDetails(method: string): Promise<DepositDetailsResultEntity> {
    const result = await this.requestExecutor.run({ scope: `deposits:details:${method}` }, async ({ signal }) => {
      const request = new HttpRequest({ deviceId: await this.deviceService.getDeviceUniqueId(), signal });
      return request.get(this.config.get('GATEWAY_WALLETS_BFF_API') + `/v1/deposits/${method}/details`);
    });
    const resultInstance = plainToInstance(DepositDetailsResultEntity, result);

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  async create({ method, ...data }: DepositCreateInput): Promise<DraftOperationResultEntity> {
    const result = await this.requestExecutor.run({ scope: `deposits:create:${method}` }, async ({ signal }) => {
      const request = new HttpRequest({ deviceId: await this.deviceService.getDeviceUniqueId(), signal });
      return request.post(this.config.get('GATEWAY_WALLETS_BFF_API') + `/v1/deposits/${method}`, data);
    });
    const resultInstance = plainToInstance(DraftOperationResultEntity, result);

    await validateOrReject(resultInstance);

    return resultInstance;
  }
}
