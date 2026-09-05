import { BindingModuleInterface, type BindingRegistryInterface } from '@sellgar/app';

import { SecureStorageServiceInterface } from './service/secure-storage-service.interface.ts';
import { SecureStorageService } from './service/secure-storage.service.ts';

export class SecureStorageBinding extends BindingModuleInterface {
  register(registry: BindingRegistryInterface): void {
    registry.bind(SecureStorageServiceInterface).to(SecureStorageService);
  }
}
