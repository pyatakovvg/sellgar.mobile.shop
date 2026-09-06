import { BindingModuleInterface, type BindingRegistryInterface } from '@sellgar/app';

import { AuthOtpControllerInterface } from './controller/auth-otp-controller.interface.ts';
import { AuthOtpController } from './controller/auth-otp.controller.ts';

export class AuthOtpBindings implements BindingModuleInterface {
  register(registry: BindingRegistryInterface): void {
    registry.bind(AuthOtpControllerInterface).to(AuthOtpController);
  }
}
