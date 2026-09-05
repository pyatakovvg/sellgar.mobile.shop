import {
  LoginWithIdentificationEntity,
  RequestPasswordResetResultEntity,
  StatusPasswordResetResultEntity,
} from '@library/domain';

import { SignInStoreInterface } from '../store/sign-in/sign-in-store.interface.ts';
import { StepStoreInterface } from '../store/step/step-store.interface.ts';
import { OtpStoreInterface } from '../store/otp/otp-store.interface.ts';

export abstract class SignInControllerInterface {
  abstract readonly signInStore: SignInStoreInterface;
  abstract readonly stepStore: StepStoreInterface;
  abstract readonly otpStore: OtpStoreInterface;

  abstract signInByCredentials(phone: string, password: string): Promise<LoginWithIdentificationEntity>;
  abstract openReidentification(): string | null;
  abstract completeReidentification(): Promise<boolean>;
  abstract failReidentification(): boolean;
  abstract clearReidentification(): void;
  abstract requestResetPassword(phone: string): Promise<RequestPasswordResetResultEntity>;
  abstract checkResetStatus(requestUuid: string): Promise<StatusPasswordResetResultEntity>;
}
