import { BindingModuleInterface, type BindingRegistryInterface } from '@sellgar/app';

import { BiometryServiceInterface } from './service/biometry-service.interface.ts';
import { BiometryService } from './service/biometry.service.ts';

export class BiometryBinding extends BindingModuleInterface {
  register(registry: BindingRegistryInterface): void {
    registry.bind(BiometryServiceInterface).to(BiometryService);
  }
}
