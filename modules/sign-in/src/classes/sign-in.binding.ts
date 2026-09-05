import { BindingModuleInterface, type BindingRegistryInterface } from '@sellgar/app';

import { SignInStore } from './store/sign-in/sign-in.store.ts';
import { SignInStoreInterface } from './store/sign-in/sign-in-store.interface.ts';

import { StepStoreInterface } from './store/step/step-store.interface.ts';
import { StepStore } from './store/step/step.store.ts';

import { OtpStoreInterface } from './store/otp/otp-store.interface.ts';
import { OtpStore } from './store/otp/otp.store.ts';

import { SignInController } from './controller/sign-in.controller.ts';
import { SignInControllerInterface } from './controller/sign-in-controller.interface.ts';

export class SignInBinding implements BindingModuleInterface {
  register(container: BindingRegistryInterface) {
    container.bind(SignInStoreInterface).to(SignInStore);
    container.bind(StepStoreInterface).to(StepStore);
    container.bind(OtpStoreInterface).to(OtpStore);

    container.bind(SignInControllerInterface).to(SignInController);
  }
}
