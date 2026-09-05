import { BindingModuleInterface, type BindingRegistryInterface } from '@sellgar/app';

import { DeviceInfoServiceInterface } from './service/device-info-service.interface.ts';
import { DeviceInfoService } from './service/device-info.service.ts';

export class DeviceInfoBinding extends BindingModuleInterface {
  register(registry: BindingRegistryInterface): void {
    registry.bind(DeviceInfoServiceInterface).to(DeviceInfoService);
  }
}
