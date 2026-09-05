import { Inject, Injectable, RequestExecutorInterface } from '@sellgar/app';
import { plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';

import { ConfigInterface } from '../../../../infrastructure/config';
import { DeviceInfoServiceInterface } from '../../../../infrastructure/device-info';
import { HttpRequest } from '../../../../infrastructure/http-client';
import { MobileVersionGatewayInterface } from './mobile-version-gateway.interface.ts';
import { MobileVersionCheckDto } from './dto/mobile-version-check.dto.ts';

import { MobileVersionResultEntity } from '../../domain/mobile-version-result.entity.ts';

@Injectable()
export class MobileVersionGateway implements MobileVersionGatewayInterface {
  constructor(
    @Inject(ConfigInterface) private readonly config: ConfigInterface,
    @Inject(DeviceInfoServiceInterface) private readonly deviceService: DeviceInfoServiceInterface,
    @Inject(RequestExecutorInterface) private readonly requestExecutor: RequestExecutorInterface,
  ) {}

  async check(dto: MobileVersionCheckDto): Promise<MobileVersionResultEntity> {
    const result = await this.requestExecutor.run({ scope: 'mobile-version:check' }, async ({ signal }) => {
      const request = new HttpRequest({ deviceId: await this.deviceService.getDeviceUniqueId(), signal });
      return request.post<MobileVersionResultEntity>(
        this.config.get('GATEWAY_WALLETS_BFF_API') + '/v1/mobile/version/check',
        dto,
      );
    });
    const resultInstance = plainToInstance(MobileVersionResultEntity, result);

    await validateOrReject(resultInstance);

    return resultInstance;
  }
}
