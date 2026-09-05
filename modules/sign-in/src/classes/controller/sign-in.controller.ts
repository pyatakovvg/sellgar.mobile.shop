import { AuthServiceInterface, LoginWithIdentificationEntity, PasswordServiceInterface } from '@library/domain';

import { Inject, Injectable } from '@sellgar/app';

import { SignInControllerInterface } from './sign-in-controller.interface.ts';

import { SignInStoreInterface } from '../store/sign-in/sign-in-store.interface.ts';
import { StepStoreInterface } from '../store/step/step-store.interface.ts';
import { OtpStoreInterface } from '../store/otp/otp-store.interface.ts';
import { ReidentificationCompletionError } from '../errors/reidentification-completion.error.ts';

@Injectable()
export class SignInController implements SignInControllerInterface {
  private reidentificationCredentials: { phone: string; password: string } | null = null;

  constructor(
    @Inject(SignInStoreInterface) readonly signInStore: SignInStoreInterface,
    @Inject(AuthServiceInterface) private readonly authService: AuthServiceInterface,
    @Inject(PasswordServiceInterface) private readonly passwordService: PasswordServiceInterface,
    @Inject(StepStoreInterface) readonly stepStore: StepStoreInterface,
    @Inject(OtpStoreInterface) readonly otpStore: OtpStoreInterface,
  ) {}

  async signInByCredentials(phone: string, password: string): Promise<LoginWithIdentificationEntity> {
    this.signInStore.setProcess(true);
    try {
      const result = await this.authService.signInByCredentials(phone, password);

      if (result.nextAction === 'Tokens') {
        this.clearReidentification();
      } else {
        this.reidentificationCredentials = { phone, password };
        this.signInStore.startReidentification(result.data);
      }

      return result;
    } catch (e) {
      throw e;
    } finally {
      this.signInStore.setProcess(false);
    }
  }

  openReidentification(): string | null {
    const identification = this.signInStore.pendingIdentification;

    if (
      !identification ||
      !this.reidentificationCredentials ||
      this.signInStore.reidentificationPhase !== 'confirmation'
    ) {
      return null;
    }

    this.signInStore.setReidentificationPhase('webview');

    return identification.identificationLink;
  }

  async completeReidentification(): Promise<boolean> {
    if (this.signInStore.reidentificationPhase !== 'webview') {
      return false;
    }

    this.signInStore.setReidentificationPhase('completing');
    this.signInStore.setProcess(true);

    try {
      const identification = this.signInStore.pendingIdentification;
      const credentials = this.reidentificationCredentials;

      if (!identification) {
        throw new ReidentificationCompletionError('status');
      }

      if (!credentials) {
        throw new ReidentificationCompletionError('login');
      }

      const status = await this._waitReidentificationStatus(identification.requestUuid);

      if (status.status !== 'Success') {
        throw new ReidentificationCompletionError('status', status);
      }

      await this._loginAfterReidentification(credentials.phone, credentials.password);
      this.clearReidentification();

      return true;
    } catch (error) {
      this.clearReidentification();
      throw error;
    } finally {
      this.signInStore.setProcess(false);
    }
  }

  failReidentification(): boolean {
    if (this.signInStore.reidentificationPhase !== 'webview') {
      return false;
    }

    this.clearReidentification();
    return true;
  }

  clearReidentification(): void {
    this.reidentificationCredentials = null;
    this.signInStore.clearReidentification();
  }

  private async _waitReidentificationStatus(requestUuid: string) {
    try {
      return await this.authService.waitReidentificationFinalStatus(requestUuid);
    } catch (error) {
      throw new ReidentificationCompletionError('status', error);
    }
  }

  private async _loginAfterReidentification(phone: string, password: string) {
    try {
      const result = await this.authService.signInByCredentials(phone, password);

      if (result.nextAction !== 'Tokens') {
        throw new ReidentificationCompletionError('login', result);
      }
    } catch (error) {
      if (error instanceof ReidentificationCompletionError) {
        throw error;
      }

      throw new ReidentificationCompletionError('login', error);
    }
  }

  async requestResetPassword(phone: string) {
    const result = await this.passwordService.requestSmsCode(phone, this.signInStore.requestUuid);
    this.otpStore.execute(result.data.verification, phone);
    this.stepStore.nextStep('OTP_CODE');
    return result;
  }

  async checkResetStatus(requestUuid: string) {
    return await this.passwordService.waitResetFinalStatus(requestUuid);
  }
}
