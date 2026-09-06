import { BindingModuleInterface, type BindingRegistryInterface } from '@sellgar/app';

import { SignInController } from './controller/sign-in.controller.ts';
import { SignInControllerInterface } from './controller/sign-in-controller.interface.ts';

export class SignInBinding implements BindingModuleInterface {
  register(container: BindingRegistryInterface) {
    container.bind(SignInControllerInterface).to(SignInController);
  }
}
