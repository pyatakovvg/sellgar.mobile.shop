import { SignUpServiceInterface, type CreationRequestSignUpResultEntity } from '@library/domain';
import { PasswordSetRoute } from '@library/route-tokens';
import {
  Controller,
  Exception,
  Inject,
  LocationServiceInterface,
  NavigateServiceInterface,
  UserRequestServiceInterface,
} from '@sellgar/app';

import { plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';

import { AuthOtpControllerInterface, type AuthOtpLoaderData } from './auth-otp-controller.interface.ts';
import { AuthOtpRouteStateEntity } from './domain/auth-otp-route-state.entity.ts';

@Controller()
export class AuthOtpController extends AuthOtpControllerInterface {
  constructor(
    @Inject(LocationServiceInterface)
    private readonly location: LocationServiceInterface,
    @Inject(NavigateServiceInterface)
    private readonly navigate: NavigateServiceInterface,
    @Inject(SignUpServiceInterface)
    private readonly signUpService: SignUpServiceInterface,
    @Inject(UserRequestServiceInterface)
    private readonly userRequest: UserRequestServiceInterface,
  ) {
    super();
  }

  async loader(): Promise<AuthOtpLoaderData> {
    const state = await this.readRouteState();

    if (!state.verification.verificationUuid) {
      throw new Exception('Токен OTP отсутствует.');
    }

    return {
      phone: state.phone,
      requestUuid: state.requestUuid,
      token: state.verification.verificationUuid,
      verification: state.verification,
    };
  }

  async action(): Promise<void> {
    const state = await this.readRouteState();
    let result: CreationRequestSignUpResultEntity;

    try {
      result = await this.signUpService.checkCreationRequest(state.requestUuid);
    } catch (error) {
      await this.userRequest.alert({
        description: 'Попробуйте повторить операцию позже',
        title: 'Что-то пошло не так',
      });
      throw error;
    }

    if (result.data.status !== 'success' || !result.data.passwordResetToken) {
      throw new Exception('Создание пользователя не завершено.');
    }

    await this.navigate.to(PasswordSetRoute, {
      state: {
        passwordResetToken: result.data.passwordResetToken,
        phone: state.phone,
      },
    });
  }

  private async readRouteState(): Promise<AuthOtpRouteStateEntity> {
    const state = plainToInstance(AuthOtpRouteStateEntity, this.location.location?.state ?? {});

    await validateOrReject(state);

    return state;
  }
}
