import { BindingModuleInterface, type BindingRegistryInterface } from '@sellgar/app';

import { PasswordResetOtpControllerInterface } from './controller/password-reset-otp-controller.interface.ts';
import { PasswordResetOtpController } from './controller/password-reset-otp.controller.ts';

export class PasswordResetOtpBindings implements BindingModuleInterface {
  register(registry: BindingRegistryInterface): void {
    registry.bind(PasswordResetOtpControllerInterface).to(PasswordResetOtpController);
  }
}
