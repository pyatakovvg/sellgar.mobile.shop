import { BindingModuleInterface, type BindingRegistryInterface } from '@sellgar/app';

import { ReidentificationControllerInterface } from './controller/reidentification-controller.interface.ts';
import { ReidentificationController } from './controller/reidentification.controller.ts';

export class ReidentificationBindings implements BindingModuleInterface {
  register(registry: BindingRegistryInterface): void {
    registry.bind(ReidentificationControllerInterface).to(ReidentificationController);
  }
}
