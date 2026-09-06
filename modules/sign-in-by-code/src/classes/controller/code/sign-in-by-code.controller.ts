import {
  ClearAuthUserDataUsecaseInterface,
  SessionAccessCodeInvalidError,
  SessionUnlockUsecaseInterface,
} from '@library/domain';
import { CheckPhoneRoute } from '@library/route-tokens';
import {
  Controller,
  Inject,
  NavigateServiceInterface,
  SessionRuntimeStateInterface,
  UserRequestServiceInterface,
} from '@sellgar/app';

import { SignInByCodeControllerInterface } from './sign-in-by-code-controller.interface.ts';

const MAX_ACCESS_CODE_ATTEMPTS = 3;

@Controller()
export class SignInByCodeController extends SignInByCodeControllerInterface {
  private failedAttempts = 0;

  constructor(
    @Inject(ClearAuthUserDataUsecaseInterface)
    private readonly clearAuthUserData: ClearAuthUserDataUsecaseInterface,
    @Inject(NavigateServiceInterface)
    private readonly navigate: NavigateServiceInterface,
    @Inject(SessionRuntimeStateInterface)
    private readonly session: SessionRuntimeStateInterface,
    @Inject(SessionUnlockUsecaseInterface)
    private readonly sessionUnlock: SessionUnlockUsecaseInterface,
    @Inject(UserRequestServiceInterface)
    private readonly userRequest: UserRequestServiceInterface,
  ) {
    super();
  }

  async action({ payload }: Parameters<SignInByCodeControllerInterface['action']>[0]): Promise<void> {
    try {
      await this.sessionUnlock.execute(payload.code);
    } catch (error) {
      if (error instanceof SessionAccessCodeInvalidError) {
        await this.handleInvalidCode(error);
        return;
      }

      await this.leaveExpiredSession('Не удалось восстановить сессию');
      throw error;
    }

    this.failedAttempts = 0;
    this.session.setAuthenticated();
  }

  private async handleInvalidCode(error: SessionAccessCodeInvalidError): Promise<never | void> {
    this.failedAttempts += 1;

    if (this.failedAttempts < MAX_ACCESS_CODE_ATTEMPTS) {
      throw error;
    }

    await this.leaveExpiredSession('Превышено количество попыток ввода кода');
  }

  private async leaveExpiredSession(title: string): Promise<void> {
    this.clearAuthUserData.execute();
    await this.userRequest.alert({
      applyText: 'Войти снова',
      description: 'Пожалуйста, войдите снова, используя номер телефона и пароль.',
      title,
    });
    await this.navigate.to(CheckPhoneRoute, { replace: true });
  }
}
