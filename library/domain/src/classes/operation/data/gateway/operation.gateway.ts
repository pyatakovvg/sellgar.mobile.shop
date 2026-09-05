import { Inject, Injectable, RequestExecutorInterface } from '@sellgar/app';
import { validateOrReject } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { ConfigInterface } from '../../../../infrastructure/config';
import { DeviceInfoServiceInterface } from '../../../../infrastructure/device-info';
import { HttpRequest } from '../../../../infrastructure/http-client';
import { OperationGatewayInterface } from './operation-gateway.interface.ts';

import type { OperationParamsInput } from './input/operation-params.input.ts';

import { OperationResultEntity } from '../../domain/operation-result.entity.ts';
import { OperationByUuidResultEntity } from '../../domain/operation-by-uuid-result.entity.ts';

@Injectable()
export class OperationGateway implements OperationGatewayInterface {
  constructor(
    @Inject(ConfigInterface) private readonly config: ConfigInterface,
    @Inject(DeviceInfoServiceInterface) private readonly deviceService: DeviceInfoServiceInterface,
    @Inject(RequestExecutorInterface) private readonly requestExecutor: RequestExecutorInterface,
  ) {}

  async getAll(params: OperationParamsInput): Promise<OperationResultEntity> {
    const result = await this.requestExecutor.run({ scope: 'operations:list' }, async ({ signal }) => {
      const request = new HttpRequest({ deviceId: await this.deviceService.getDeviceUniqueId(), signal });
      return request.get(this.config.get('GATEWAY_WALLETS_BFF_API') + '/v1/wallets/current/operations', { params });
    });
    const resultInstance = plainToInstance(OperationResultEntity, result);

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  async getByUuid(uuid: string): Promise<OperationByUuidResultEntity> {
    const result = await this.requestExecutor.run({ scope: `operation:${uuid}` }, async ({ signal }) => {
      const request = new HttpRequest({ deviceId: await this.deviceService.getDeviceUniqueId(), signal });
      return request.get(this.config.get('GATEWAY_WALLETS_BFF_API') + '/v1/wallets/current/operations/' + uuid);
    });
    const resultInstance = plainToInstance(OperationByUuidResultEntity, result);

    await validateOrReject(resultInstance);

    return resultInstance;
  }
}
