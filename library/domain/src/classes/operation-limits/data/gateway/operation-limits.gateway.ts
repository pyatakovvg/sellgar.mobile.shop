import { Inject, Injectable, RequestExecutorInterface } from '@sellgar/app';
import { validateOrReject } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { ConfigInterface } from '../../../../infrastructure/config';
import { DeviceInfoServiceInterface } from '../../../../infrastructure/device-info';
import { HttpRequest } from '../../../../infrastructure/http-client';
import { OperationLimitsGatewayInterface } from './operation-limits-gateway.interface.ts';

import type { OperationLimitsInput } from './input/operation-limits.input.ts';

import { OperationLimitsResultEntity } from '../../domain/operation-limits-result.entity.ts';

@Injectable()
export class OperationLimitsGateway implements OperationLimitsGatewayInterface {
  constructor(
    @Inject(ConfigInterface) private readonly config: ConfigInterface,
    @Inject(DeviceInfoServiceInterface) private readonly deviceService: DeviceInfoServiceInterface,
    @Inject(RequestExecutorInterface) private readonly requestExecutor: RequestExecutorInterface,
  ) {}

  async getLimits(params: OperationLimitsInput): Promise<OperationLimitsResultEntity> {
    const result = await this.requestExecutor.run({ scope: 'operation-limits:get' }, async ({ signal }) => {
      const request = new HttpRequest({ clientDevice: await this.deviceService.getClientDeviceHeader(), signal });
      return request.get(this.config.get('GATEWAY_WALLETS_BFF_API') + '/v1/operation-limits', { params });
    });
    const resultInstance = plainToInstance(OperationLimitsResultEntity, result);

    await validateOrReject(resultInstance);

    return resultInstance;
  }
}
