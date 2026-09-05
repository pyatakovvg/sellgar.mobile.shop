import { BindingModuleInterface, type BindingRegistryInterface } from '@sellgar/app';

import { TimerInterface } from './timer.interface.ts';
import { Timer } from './timer.ts';

export class TimerBinding extends BindingModuleInterface {
  register(registry: BindingRegistryInterface): void {
    registry.bind(TimerInterface).to(Timer);
  }
}
