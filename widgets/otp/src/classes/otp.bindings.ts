import { BindingModuleInterface, type BindingRegistryInterface } from '@sellgar/app';

import { OtpConfirmControllerInterface } from './controller/confirm/otp-confirm-controller.interface.ts';
import { OtpConfirmController } from './controller/confirm/otp-confirm.controller.ts';
import { OtpResendControllerInterface } from './controller/resend/otp-resend-controller.interface.ts';
import { OtpResendController } from './controller/resend/otp-resend.controller.ts';

export class OtpBindings implements BindingModuleInterface {
  register(registry: BindingRegistryInterface): void {
    registry.bind(OtpConfirmControllerInterface).to(OtpConfirmController);
    registry.bind(OtpResendControllerInterface).to(OtpResendController);
  }
}
