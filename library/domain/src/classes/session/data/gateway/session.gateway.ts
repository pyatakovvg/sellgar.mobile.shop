import { Inject, Injectable, RequestExecutorInterface } from '@sellgar/app';
import { validateOrReject } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { ConfigInterface } from '../../../../infrastructure/config';
import { DeviceInfoServiceInterface } from '../../../../infrastructure/device-info';
import { HttpRequest } from '../../../../infrastructure/http-client';
import { AuthServiceInterface } from '../../../auth';

import type { SessionCreateInput } from './input/session-create.input.ts';
import type { SessionLogoutInput } from './input/session-logout.input.ts';

import { SessionCreateResultEntity } from '../../domain/session-create-result.entity.ts';
import { SessionLogoutResultEntity } from '../../domain/session-logout-result.entity.ts';

import { SessionGatewayInterface } from './session-gateway.interface.ts';

@Injectable()
export class SessionGateway implements SessionGatewayInterface {
  constructor(
    @Inject(AuthServiceInterface) private readonly authService: AuthServiceInterface,
    @Inject(ConfigInterface) private readonly config: ConfigInterface,
    @Inject(DeviceInfoServiceInterface) private readonly deviceService: DeviceInfoServiceInterface,
    @Inject(RequestExecutorInterface) private readonly requestExecutor: RequestExecutorInterface,
  ) {}

  async create(dto: SessionCreateInput): Promise<SessionCreateResultEntity> {
    const result = await this.requestExecutor.run({ scope: 'session:create' }, async ({ signal }) => {
      const request = new HttpRequest({
        accessToken: this.authService.getAccessToken(),
        clientDevice: await this.deviceService.getClientDeviceHeader(),
        signal,
      });
      return request.post<SessionCreateResultEntity>(
        this.config.get('GATEWAY_WALLETS_BFF_API') + '/v1/auth/devices/sessions',
        dto,
      );
    });
    const resultInstance = plainToInstance(SessionCreateResultEntity, result);

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  async logout(dto: SessionLogoutInput): Promise<SessionLogoutResultEntity> {
    const result = await this.requestExecutor.run({ scope: 'session:logout' }, async ({ signal }) => {
      const request = new HttpRequest({
        accessToken: this.authService.getAccessToken(),
        clientDevice: await this.deviceService.getClientDeviceHeader(),
        signal,
      });
      return request.post<SessionLogoutResultEntity>(
        this.config.get('GATEWAY_WALLETS_BFF_API') + '/v1/auth/devices/sessions/logout',
        dto,
      );
    });
    const resultInstance = plainToInstance(SessionLogoutResultEntity, result);

    await validateOrReject(resultInstance);

    return resultInstance;
  }
}
