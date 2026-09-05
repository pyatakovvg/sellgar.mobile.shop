import { Inject, Injectable, RequestExecutorInterface } from '@sellgar/app';
import { plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';

import { ConfigInterface } from '../../../../infrastructure/config';
import { DeviceInfoServiceInterface } from '../../../../infrastructure/device-info';
import { HttpRequest } from '../../../../infrastructure/http-client';

import { OtpResultEntity } from '../../domain/otp-result.entity.ts';

import { OtpGatewayInterface } from './otp-gateway.interface.ts';

@Injectable()
export class OtpGateway implements OtpGatewayInterface {
  constructor(
    @Inject(ConfigInterface) private readonly config: ConfigInterface,
    @Inject(DeviceInfoServiceInterface) private readonly deviceService: DeviceInfoServiceInterface,
    @Inject(RequestExecutorInterface) private readonly requestExecutor: RequestExecutorInterface,
  ) {}

  async resend(verificationUuid: string): Promise<OtpResultEntity> {
    const result = await this.requestExecutor.run({ scope: `otp:resend:${verificationUuid}` }, async ({ signal }) => {
      const request = new HttpRequest({ deviceId: await this.deviceService.getDeviceUniqueId(), signal });
      return request.post<OtpResultEntity>(
        this.config.get('GATEWAY_WALLETS_BFF_API') + `/v1/otp/${verificationUuid}/resend`,
        {},
      );
    });
    const resultInstance = plainToInstance(OtpResultEntity, result);

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  async confirm(otpCode: string, verificationUuid: string): Promise<OtpResultEntity> {
    const result = await this.requestExecutor.run({ scope: `otp:confirm:${verificationUuid}` }, async ({ signal }) => {
      const request = new HttpRequest({ deviceId: await this.deviceService.getDeviceUniqueId(), signal });
      return request.post<OtpResultEntity>(
        this.config.get('GATEWAY_WALLETS_BFF_API') + `/v1/otp/${verificationUuid}/confirm`,
        { otpCode },
      );
    });
    const resultInstance = plainToInstance(OtpResultEntity, result);

    await validateOrReject(resultInstance);
    return resultInstance;
  }

  async getOtp(verificationUuid: string): Promise<OtpResultEntity> {
    const result = await this.requestExecutor.run({ scope: `otp:get:${verificationUuid}` }, async ({ signal }) => {
      const request = new HttpRequest({ deviceId: await this.deviceService.getDeviceUniqueId(), signal });
      return request.get<OtpResultEntity>(this.config.get('GATEWAY_WALLETS_BFF_API') + `/v1/otp/${verificationUuid}`);
    });
    const resultInstance = plainToInstance(OtpResultEntity, result);

    await validateOrReject(resultInstance);
    return resultInstance;
  }
}
