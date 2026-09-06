import {
  BiometryServiceInterface,
  ClearAuthUserDataUsecaseInterface,
  type TBiometry,
  SessionRestoreUsecaseInterface,
} from '@library/domain';
import { CheckPhoneRoute } from '@library/route-tokens';
import {
  Controller,
  Inject,
  NavigateServiceInterface,
  SessionRuntimeStateInterface,
  UserRequestServiceInterface,
} from '@sellgar/app';

import { BiometricSignInControllerInterface } from './biometric-sign-in-controller.interface.ts';

@Controller()
export class BiometricSignInController extends BiometricSignInControllerInterface {
  constructor(
    @Inject(BiometryServiceInterface)
    private readonly biometry: BiometryServiceInterface,
    @Inject(ClearAuthUserDataUsecaseInterface)
    private readonly clearAuthUserData: ClearAuthUserDataUsecaseInterface,
    @Inject(NavigateServiceInterface)
    private readonly navigate: NavigateServiceInterface,
    @Inject(SessionRestoreUsecaseInterface)
    private readonly sessionRestore: SessionRestoreUsecaseInterface,
    @Inject(SessionRuntimeStateInterface)
    private readonly session: SessionRuntimeStateInterface,
    @Inject(UserRequestServiceInterface)
    private readonly userRequest: UserRequestServiceInterface,
  ) {
    super();
  }

  loader(): Promise<TBiometry | null> {
    return this.biometry.getAvailableType();
  }

  async action(): Promise<void> {
    const signature = await this.biometry.getBiometrySignature('Вход по биометрии');

    if (!signature) return;

    try {
      await this.sessionRestore.execute();
    } catch (error) {
      this.clearAuthUserData.execute();
      await this.userRequest.alert({
        applyText: 'Войти снова',
        description: 'Пожалуйста, войдите снова, используя номер телефона и пароль.',
        title: 'Не удалось восстановить сессию',
      });
      await this.navigate.to(CheckPhoneRoute, { replace: true });
      throw error;
    }

    this.session.setAuthenticated();
  }
}
