import { BindingModuleInterface, type BindingRegistryInterface } from '@sellgar/app';

import { AuthBlockedControllerInterface } from './controller/auth-blocked-controller.interface.ts';
import { AuthBlockedController } from './controller/auth-blocked.controller.ts';

export class AuthBlockedBindings implements BindingModuleInterface {
  register(registry: BindingRegistryInterface): void {
    registry.bind(AuthBlockedControllerInterface).to(AuthBlockedController);
  }
}
