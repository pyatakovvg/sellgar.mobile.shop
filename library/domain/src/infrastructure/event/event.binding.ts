import { BindingModuleInterface, type BindingRegistryInterface } from '@sellgar/app';

import { EventServiceInterface } from './event-service.interface.ts';
import { EventService } from './event.service.ts';

export class EventBinding extends BindingModuleInterface {
  register(registry: BindingRegistryInterface): void {
    registry.bind(EventServiceInterface).to(EventService).inSingletonScope();
  }
}
