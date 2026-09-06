import { BindingModuleInterface, type BindingRegistryInterface } from '@sellgar/app';

import { ConfirmAccessCodeControllerInterface } from './controller/confirm/confirm-access-code-controller.interface.ts';
import { ConfirmAccessCodeController } from './controller/confirm/confirm-access-code.controller.ts';
import { SetAccessCodeControllerInterface } from './controller/set/set-access-code-controller.interface.ts';
import { SetAccessCodeController } from './controller/set/set-access-code.controller.ts';
import { AccessCodeStoreInterface } from './store/access-code-store.interface.ts';
import { AccessCodeStore } from './store/access-code.store.ts';

export class SetSignInCodeBindings implements BindingModuleInterface {
  register(registry: BindingRegistryInterface): void {
    registry.bind(AccessCodeStoreInterface).to(AccessCodeStore).inSingletonScope();
    registry.bind(SetAccessCodeControllerInterface).to(SetAccessCodeController);
    registry.bind(ConfirmAccessCodeControllerInterface).to(ConfirmAccessCodeController);
  }
}
