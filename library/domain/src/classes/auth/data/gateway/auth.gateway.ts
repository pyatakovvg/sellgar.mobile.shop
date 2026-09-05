import { Inject, Injectable, RequestExecutorInterface } from '@sellgar/app';
import { plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';

import { ConfigInterface } from '../../../../infrastructure/config';
import { DeviceInfoServiceInterface } from '../../../../infrastructure/device-info';
import { HttpRequest } from '../../../../infrastructure/http-client';

import type { SessionRestoreInput } from './input/session-restore.input.ts';
import type { PasswordResetInput } from './input/password-reset.input.ts';
import type { AuthStartInput } from './input/auth-start.input.ts';

import { AuthResultEntity } from '../../domain/auth-result.entity.ts';

import { AuthGatewayInterface } from './auth-gateway.interface.ts';
import { AuthStartResultEntity } from '../../domain/auth-start-result.entity.ts';
import { LoginWithIdentificationEntity } from '../../domain/login-with-identification.entity.ts';
import { LoginWithIdentificationResultEntity } from '../../domain/login-with-identification-result.entity.ts';
import { ReidentificationStatusEntity } from '../../domain/reidentification-status.entity.ts';
import { ReidentificationStatusResultEntity } from '../../domain/reidentification-status-result.entity.ts';

@Injectable()
export class AuthGateway implements AuthGatewayInterface {
  constructor(
    @Inject(ConfigInterface) private readonly config: ConfigInterface,
    @Inject(DeviceInfoServiceInterface) private readonly deviceService: DeviceInfoServiceInterface,
    @Inject(RequestExecutorInterface) private readonly requestExecutor: RequestExecutorInterface,
  ) {}

  async refresh(refreshToken: string): Promise<AuthResultEntity> {
    const result = await this.requestExecutor.run({ scope: 'auth:refresh' }, async ({ signal }) => {
      const request = new HttpRequest({ deviceId: await this.deviceService.getDeviceUniqueId(), signal });
      return request.post<AuthResultEntity>(this.config.get('GATEWAY_WALLETS_BFF_API') + '/v1/auth/devices/refresh', {
        refreshToken,
      });
    });
    const resultInstance = plainToInstance(AuthResultEntity, result);

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  async restore(dto: SessionRestoreInput): Promise<AuthResultEntity> {
    const result = await this.requestExecutor.run({ scope: 'auth:restore' }, async ({ signal }) => {
      const request = new HttpRequest({ deviceId: await this.deviceService.getDeviceUniqueId(), signal });
      return request.post<AuthResultEntity>(
        this.config.get('GATEWAY_WALLETS_BFF_API') + '/v1/auth/devices/sessions/restore',
        dto,
      );
    });
    const resultInstance = plainToInstance(AuthResultEntity, result);

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  async signInByCredentials(phone: string, password: string): Promise<LoginWithIdentificationEntity> {
    const result = await this.requestExecutor.run({ scope: 'auth:sign-in' }, async ({ signal }) => {
      const request = new HttpRequest({ deviceId: await this.deviceService.getDeviceUniqueId(), signal });
      return request.post(this.config.get('GATEWAY_WALLETS_BFF_API') + '/v1/auth/devices/login-with-identification', {
        phone,
        password,
      });
    });

    const resultInstance = plainToInstance(LoginWithIdentificationResultEntity, result);

    await validateOrReject(resultInstance);

    return resultInstance.data;
  }

  async getReidentificationStatus(requestUuid: string): Promise<ReidentificationStatusEntity> {
    const result = await this.requestExecutor.run(
      { scope: `auth:reidentification-status:${requestUuid}` },
      async ({ signal }) => {
        const request = new HttpRequest({ deviceId: await this.deviceService.getDeviceUniqueId(), signal });
        return request.get(
          this.config.get('GATEWAY_WALLETS_BFF_API') + `/v1/auth/identification/${requestUuid}/status`,
        );
      },
    );
    const resultInstance = plainToInstance(ReidentificationStatusResultEntity, result);

    await validateOrReject(resultInstance);

    return resultInstance.data;
  }

  async passwordReset(dto: PasswordResetInput): Promise<AuthResultEntity> {
    const result = await this.requestExecutor.run({ scope: 'auth:password-reset' }, async ({ signal }) => {
      const request = new HttpRequest({ deviceId: await this.deviceService.getDeviceUniqueId(), signal });
      return request.post(this.config.get('GATEWAY_WALLETS_BFF_API') + '/v1/auth/devices/reset-password', dto);
    });
    const resultInstance = plainToInstance(AuthResultEntity, result);

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  async startAuth(dto: AuthStartInput): Promise<AuthStartResultEntity> {
    const result = await this.requestExecutor.run({ scope: 'auth:start' }, async ({ signal }) => {
      const request = new HttpRequest({ deviceId: await this.deviceService.getDeviceUniqueId(), signal });
      return request.post(this.config.get('GATEWAY_WALLETS_BFF_API') + '/v1/auth/devices/start', dto);
    });
    const resultInstance = plainToInstance(AuthStartResultEntity, result);

    await validateOrReject(resultInstance);

    return resultInstance;
  }
}
