import { Inject, Injectable } from '@sellgar/app';

import { DeviceInfoServiceInterface } from '../../../infrastructure/device-info';
import { MobileVersionServiceInterface } from './mobile-version-service.interface.ts';
import { MobileVersionGatewayInterface } from '../data/gateway/mobile-version-gateway.interface.ts';

@Injectable()
export class MobileVersionService implements MobileVersionServiceInterface {
  constructor(
    @Inject(MobileVersionGatewayInterface) private readonly mobileVersionGateway: MobileVersionGatewayInterface,
    @Inject(DeviceInfoServiceInterface) private readonly deviceInfoService: DeviceInfoServiceInterface,
  ) {}

  async check() {
    const result = await this.mobileVersionGateway.check({
      platform: this.deviceInfoService.getPlatform(),
      version: this.deviceInfoService.getAppVersion(),
    });

    return result.data;
  }
}
