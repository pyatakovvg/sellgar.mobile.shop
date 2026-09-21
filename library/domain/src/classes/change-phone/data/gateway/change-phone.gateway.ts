import { Inject, Injectable } from '@sellgar/app';
import { validateOrReject } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { ConfigInterface } from '../../../../infrastructure/config';
import { DeviceInfoServiceInterface } from '../../../../infrastructure/device-info';
import { HttpRequest } from '../../../../infrastructure/http-client';
import { RequestExecutorDelegateInterface } from '../../../../infrastructure/request-executor-delegate';
import { ChangePhoneGatewayInterface } from './change-phone-gateway.interface.ts';

import { ChangePhoneResultEntity } from '../../domain/change-phone-result.entity.ts';
import type { ChangePhoneInput } from './input/change-phone.input.ts';

@Injectable()
export class ChangePhoneGateway implements ChangePhoneGatewayInterface {
  constructor(
    @Inject(ConfigInterface) private readonly config: ConfigInterface,
    @Inject(DeviceInfoServiceInterface) private readonly deviceService: DeviceInfoServiceInterface,
    @Inject(RequestExecutorDelegateInterface) private readonly requestExecutor: RequestExecutorDelegateInterface,
  ) {}

  async initiate(params: ChangePhoneInput) {
    const result = await this.requestExecutor.run({ scope: 'change-phone:initiate' }, async ({ signal }) => {
      const request = new HttpRequest({ clientDevice: await this.deviceService.getClientDeviceHeader(), signal });
      return request.post<ChangePhoneResultEntity>(
        this.config.get('GATEWAY_WALLETS_BFF_API') + '/v1/change-phone/initiate',
        params,
      );
    });
    const resultInstance = plainToInstance(ChangePhoneResultEntity, result);

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  async getStatus(uuid: string) {
    const result = await this.requestExecutor.run({ scope: `change-phone:status:${uuid}` }, async ({ signal }) => {
      const request = new HttpRequest({ clientDevice: await this.deviceService.getClientDeviceHeader(), signal });
      return request.get<ChangePhoneResultEntity>(
        this.config.get('GATEWAY_WALLETS_BFF_API') + `/v1/change-phone/${uuid}/status`,
      );
    });
    const resultInstance = plainToInstance(ChangePhoneResultEntity, result);

    await validateOrReject(resultInstance);

    return resultInstance;
  }
}
