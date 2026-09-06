import { BindingModuleInterface, type BindingRegistryInterface } from '@sellgar/app';

import { CheckPhoneControllerInterface } from './controller/check-phone-controller.interface.ts';
import { CheckPhoneController } from './controller/check-phone.controller.ts';

export class CheckPhoneBindings implements BindingModuleInterface {
  register(registry: BindingRegistryInterface): void {
    registry.bind(CheckPhoneControllerInterface).to(CheckPhoneController);
  }
}
