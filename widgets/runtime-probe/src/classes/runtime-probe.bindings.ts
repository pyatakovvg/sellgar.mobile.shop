import { BindingModuleInterface, type BindingRegistryInterface } from '@sellgar/app';

import { RuntimeProbeControllerInterface } from './controller/runtime-probe-controller.interface.ts';
import { RuntimeProbeController } from './controller/runtime-probe.controller.ts';

export class RuntimeProbeBindings implements BindingModuleInterface {
  register(registry: BindingRegistryInterface): void {
    registry.bind(RuntimeProbeControllerInterface).to(RuntimeProbeController);
  }
}
