import { Inject, Injectable, RequestExecutorInterface } from '@sellgar/app';
import { validateOrReject } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { ConfigInterface } from '../../../../infrastructure/config';
import { DeviceInfoServiceInterface } from '../../../../infrastructure/device-info';
import { HttpRequest } from '../../../../infrastructure/http-client';
import { FeaturesGatewayInterface } from './features-gateway.interface.ts';

import { FeaturesResultEntity } from '../../domain/features-result.entity.ts';

@Injectable()
export class FeaturesGateway implements FeaturesGatewayInterface {
  constructor(
    @Inject(ConfigInterface) private readonly config: ConfigInterface,
    @Inject(DeviceInfoServiceInterface) private readonly deviceService: DeviceInfoServiceInterface,
    @Inject(RequestExecutorInterface) private readonly requestExecutor: RequestExecutorInterface,
  ) {}

  async get(): Promise<FeaturesResultEntity> {
    const result = await this.requestExecutor.run({ scope: 'features:get' }, async ({ signal }) => {
      const request = new HttpRequest({ deviceId: await this.deviceService.getDeviceUniqueId(), signal });
      return request.get(this.config.get('GATEWAY_WALLETS_BFF_API') + '/v1/features');
    });
    const resultInstance = plainToInstance(FeaturesResultEntity, result);

    await validateOrReject(resultInstance);

    return resultInstance;
  }
}
