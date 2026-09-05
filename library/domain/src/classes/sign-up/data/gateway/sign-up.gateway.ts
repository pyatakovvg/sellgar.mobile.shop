import { Inject, Injectable, RequestExecutorInterface } from '@sellgar/app';

import { ConfigInterface } from '../../../../infrastructure/config';
import { DeviceInfoServiceInterface } from '../../../../infrastructure/device-info';
import { HttpRequest } from '../../../../infrastructure/http-client';

import { SignUpGatewayInterface } from './sign-up-gateway.interface.ts';

@Injectable()
export class SignUpGateway implements SignUpGatewayInterface {
  constructor(
    @Inject(ConfigInterface) private readonly config: ConfigInterface,
    @Inject(DeviceInfoServiceInterface) private readonly deviceService: DeviceInfoServiceInterface,
    @Inject(RequestExecutorInterface) private readonly requestExecutor: RequestExecutorInterface,
  ) {}

  requestSmsCode(phone: string, requestUuid: string) {
    return this.requestExecutor.run({ scope: `sign-up:initiate:${requestUuid}` }, async ({ signal }) => {
      const request = new HttpRequest({ deviceId: await this.deviceService.getDeviceUniqueId(), signal });
      return request.post(this.config.get('GATEWAY_WALLETS_BFF_API') + '/v1/sign-up/initiate', {
        phone,
        requestUuid,
      });
    });
  }

  signUp(phone: string, code: string, token: string, requestUuid: string) {
    return this.requestExecutor.run({ scope: `sign-up:confirm:${requestUuid}` }, async ({ signal }) => {
      const request = new HttpRequest({ deviceId: await this.deviceService.getDeviceUniqueId(), signal });
      return request.post(this.config.get('GATEWAY_WALLETS_BFF_API') + `/v1/sign-up/${requestUuid}/phone-confirm`, {
        code,
        phone,
        token,
      });
    });
  }

  checkCreationRequest(requestUuid: string) {
    return this.requestExecutor.run({ scope: `sign-up:status:${requestUuid}` }, async ({ signal }) => {
      const request = new HttpRequest({ deviceId: await this.deviceService.getDeviceUniqueId(), signal });
      return request.get(this.config.get('GATEWAY_WALLETS_BFF_API') + `/v1/sign-up/${requestUuid}/status`);
    });
  }
}
