import { BindingModuleInterface, type BindingRegistryInterface } from '@sellgar/app';

import { PasswordSetControllerInterface } from './controller/password-set-controller.interface.ts';
import { PasswordSetController } from './controller/password-set.controller.ts';

export class PasswordSetBindings implements BindingModuleInterface {
  register(registry: BindingRegistryInterface): void {
    registry.bind(PasswordSetControllerInterface).to(PasswordSetController);
  }
}
