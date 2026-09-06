import { BindingModuleInterface, type BindingRegistryInterface } from '@sellgar/app';

import { ReidentificationConfirmControllerInterface } from './controller/reidentification-confirm-controller.interface.ts';
import { ReidentificationConfirmController } from './controller/reidentification-confirm.controller.ts';

export class ReidentificationConfirmBindings implements BindingModuleInterface {
  register(registry: BindingRegistryInterface): void {
    registry.bind(ReidentificationConfirmControllerInterface).to(ReidentificationConfirmController);
  }
}
