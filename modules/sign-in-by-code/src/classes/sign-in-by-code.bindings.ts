import { BindingModuleInterface, type BindingRegistryInterface } from '@sellgar/app';

import { BiometricSignInControllerInterface } from './controller/biometry/biometric-sign-in-controller.interface.ts';
import { BiometricSignInController } from './controller/biometry/biometric-sign-in.controller.ts';
import { SignInByCodeControllerInterface } from './controller/code/sign-in-by-code-controller.interface.ts';
import { SignInByCodeController } from './controller/code/sign-in-by-code.controller.ts';
import { ExitSignInByCodeControllerInterface } from './controller/exit/exit-sign-in-by-code-controller.interface.ts';
import { ExitSignInByCodeController } from './controller/exit/exit-sign-in-by-code.controller.ts';

export class SignInByCodeBindings implements BindingModuleInterface {
  register(registry: BindingRegistryInterface): void {
    registry.bind(SignInByCodeControllerInterface).to(SignInByCodeController).inSingletonScope();
    registry.bind(BiometricSignInControllerInterface).to(BiometricSignInController);
    registry.bind(ExitSignInByCodeControllerInterface).to(ExitSignInByCodeController);
  }
}
