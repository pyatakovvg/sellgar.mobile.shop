import {
  getAuthAccessRestriction,
  PasswordServiceInterface,
  type StatusPasswordResetResultEntity,
} from '@library/domain';
import { AuthBlockedRoute, PasswordSetRoute, SignInRoute } from '@library/route-tokens';
import {
  BackServiceInterface,
  type BackInterception,
  Controller,
  Exception,
  Inject,
  LocationServiceInterface,
  NavigateServiceInterface,
  UserRequestServiceInterface,
} from '@sellgar/app';
import { plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';

import {
  PasswordResetOtpControllerInterface,
  type PasswordResetOtpLoaderData,
} from './password-reset-otp-controller.interface.ts';
import { PasswordResetOtpRouteStateEntity } from './domain/password-reset-otp-route-state.entity.ts';

@Controller()
export class PasswordResetOtpController extends PasswordResetOtpControllerInterface {
  private readonly backInterception: BackInterception;
  private phone: string | null = null;

  constructor(
    @Inject(BackServiceInterface)
    back: BackServiceInterface,
    @Inject(LocationServiceInterface)
    private readonly location: LocationServiceInterface,
    @Inject(NavigateServiceInterface)
    private readonly navigate: NavigateServiceInterface,
    @Inject(PasswordServiceInterface)
    private readonly passwordService: PasswordServiceInterface,
    @Inject(UserRequestServiceInterface)
    private readonly userRequest: UserRequestServiceInterface,
  ) {
    super();
    this.backInterception = back.intercept(
      () => this.phone !== null,
      () => this.returnToSignIn(),
    );
  }

  dispose(): void {
    this.backInterception.dispose();
  }

  async loader({
    params,
  }: Parameters<PasswordResetOtpControllerInterface['loader']>[0]): Promise<PasswordResetOtpLoaderData> {
    const state = await this.readRouteState();
    this.phone = state.phone;
    const result = await this.passwordService.requestSmsCode(state.phone, params.requestUuid);

    return {
      phone: state.phone,
      requestUuid: params.requestUuid,
      token: result.data.token,
      verification: result.data.verification,
    };
  }

  async action({ params }: Parameters<PasswordResetOtpControllerInterface['action']>[0]): Promise<void> {
    const state = await this.readRouteState();
    let result: StatusPasswordResetResultEntity;

    try {
      result = await this.passwordService.waitResetFinalStatus(params.requestUuid);
    } catch (error) {
      const restriction = getAuthAccessRestriction(error);

      if (restriction) {
        await this.navigate.to(AuthBlockedRoute, {
          state: {
            title: restriction === 'temporary' ? 'Доступ к аккаунту временно ограничен' : 'Доступ к аккаунту ограничен',
          },
        });
        return;
      }

      await this.userRequest.alert({
        description: 'Попробуйте повторить операцию позже',
        title: 'Что-то пошло не так',
      });
      throw error;
    }

    const passwordResetToken = result.data.recoveryToken?.passwordRecoveryToken;

    if (!passwordResetToken) {
      throw new Exception('Токен восстановления пароля отсутствует.');
    }

    await this.navigate.to(PasswordSetRoute, {
      replace: true,
      state: {
        passwordResetToken,
        phone: state.phone,
      },
    });
  }

  private async readRouteState(): Promise<PasswordResetOtpRouteStateEntity> {
    const state = plainToInstance(PasswordResetOtpRouteStateEntity, this.location.location?.state ?? {});

    await validateOrReject(state);

    return state;
  }

  private async returnToSignIn(): Promise<void> {
    const phone = this.phone;

    if (phone === null) {
      return;
    }

    await this.navigate.to(SignInRoute, {
      replace: true,
      state: { phone },
    });
  }
}
