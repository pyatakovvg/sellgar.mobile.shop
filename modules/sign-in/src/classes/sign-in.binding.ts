import { BindingModuleInterface, type BindingRegistryInterface } from '@sellgar/app';

import { SignInController } from './controller/sign-in.controller.ts';
import { SignInControllerInterface } from './controller/sign-in-controller.interface.ts';
import { PasswordResetControllerInterface } from './controller/password-reset/password-reset-controller.interface.ts';
import { PasswordResetController } from './controller/password-reset/password-reset.controller.ts';

export class SignInBinding implements BindingModuleInterface {
  register(container: BindingRegistryInterface) {
    container.bind(SignInControllerInterface).to(SignInController);
    container.bind(PasswordResetControllerInterface).to(PasswordResetController);
  }
}
