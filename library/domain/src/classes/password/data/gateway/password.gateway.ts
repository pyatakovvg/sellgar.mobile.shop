import { Inject, Injectable, RequestExecutorInterface } from '@sellgar/app';

import { ConfigInterface } from '../../../../infrastructure/config';
import { DeviceInfoServiceInterface } from '../../../../infrastructure/device-info';
import { HttpRequest } from '../../../../infrastructure/http-client';

import { type PasswordGatewayInterface } from './password-gateway.interface.ts';

@Injectable()
export class PasswordGateway implements PasswordGatewayInterface {
  constructor(
    @Inject(ConfigInterface) private readonly config: ConfigInterface,
    @Inject(DeviceInfoServiceInterface) private readonly deviceService: DeviceInfoServiceInterface,
    @Inject(RequestExecutorInterface) private readonly requestExecutor: RequestExecutorInterface,
  ) {}

  requestSmsCode(phone: string, requestUuid: string) {
    return this.requestExecutor.run({ scope: `password-recovery:initiate:${requestUuid}` }, async ({ signal }) => {
      const request = new HttpRequest({ deviceId: await this.deviceService.getDeviceUniqueId(), signal });
      return request.post(this.config.get('GATEWAY_WALLETS_BFF_API') + '/v1/password-recovery/initiate', {
        requestUuid,
        phone,
      });
    });
  }

  phoneConfirm(phone: string, code: string, token: string, requestUuid: string) {
    return this.requestExecutor.run({ scope: `password-recovery:confirm:${requestUuid}` }, async ({ signal }) => {
      const request = new HttpRequest({ deviceId: await this.deviceService.getDeviceUniqueId(), signal });
      return request.post(
        this.config.get('GATEWAY_WALLETS_BFF_API') + `/v1/password-recovery/${requestUuid}/phone-confirm`,
        {
          token,
          phone,
          code,
        },
      );
    });
  }

  checkStatus(requestUuid: string) {
    return this.requestExecutor.run({ scope: `password-recovery:status:${requestUuid}` }, async ({ signal }) => {
      const request = new HttpRequest({ deviceId: await this.deviceService.getDeviceUniqueId(), signal });
      return request.get(this.config.get('GATEWAY_WALLETS_BFF_API') + `/v1/password-recovery/${requestUuid}/status`);
    });
  }
}
