import { BindingModuleInterface, type BindingRegistryInterface } from '@sellgar/app';

import { FormActionServiceInterface } from './application/form-action-service.interface.ts';
import { FormActionService } from './application/form-action.service.ts';

export class FormActionBinding extends BindingModuleInterface {
  register(registry: BindingRegistryInterface): void {
    registry.bind(FormActionServiceInterface).to(FormActionService);
  }
}
