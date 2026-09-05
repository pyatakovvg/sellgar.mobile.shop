import { Inject, Injectable, RequestExecutorInterface } from '@sellgar/app';
import { validateOrReject } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { ConfigInterface } from '../../../../infrastructure/config';
import { DeviceInfoServiceInterface } from '../../../../infrastructure/device-info';
import { HttpRequest } from '../../../../infrastructure/http-client';
import { ProfileGatewayInterface } from './profile-gateway.interface.ts';

import { ProfileResultEntity } from '../../domain/profile-result.entity.ts';

@Injectable()
export class ProfileGateway implements ProfileGatewayInterface {
  constructor(
    @Inject(ConfigInterface) private readonly config: ConfigInterface,
    @Inject(DeviceInfoServiceInterface) private readonly deviceService: DeviceInfoServiceInterface,
    @Inject(RequestExecutorInterface) private readonly requestExecutor: RequestExecutorInterface,
  ) {}

  async get() {
    const result = await this.requestExecutor.run({ scope: 'profile:get' }, async ({ signal }) => {
      const request = new HttpRequest({ deviceId: await this.deviceService.getDeviceUniqueId(), signal });
      return request.get<ProfileResultEntity>(this.config.get('GATEWAY_WALLETS_BFF_API') + '/v1/auth/profile');
    });
    const resultInstance = plainToInstance(ProfileResultEntity, result);

    await validateOrReject(resultInstance);

    return resultInstance;
  }
}
