import { AuthServiceInterface } from '@library/domain';
import type { LoginPendingIdentificationEntity, LoginWithIdentificationEntity } from '@library/domain';
import { AuthBlockedRoute, ReidentificationRoute, SetSignInCodeRoute } from '@library/route-tokens';
import {
  BadRequestException,
  Controller,
  Inject,
  LocationServiceInterface,
  NavigateServiceInterface,
  UserRequestServiceInterface,
} from '@sellgar/app';
import { plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';

import { InvalidCredentialsError } from '../error/invalid-credentials.error.ts';
import { SignInControllerInterface } from './sign-in-controller.interface.ts';
import { SignInRouteStateEntity } from './domain/sign-in-route-state.entity.ts';

@Controller()
export class SignInController extends SignInControllerInterface {
  constructor(
    @Inject(AuthServiceInterface)
    private readonly authService: AuthServiceInterface,
    @Inject(LocationServiceInterface)
    private readonly location: LocationServiceInterface,
    @Inject(NavigateServiceInterface)
    private readonly navigate: NavigateServiceInterface,
    @Inject(UserRequestServiceInterface)
    private readonly userRequest: UserRequestServiceInterface,
  ) {
    super();
  }

  async loader(): Promise<SignInRouteStateEntity> {
    return this.readRouteState();
  }

  async action({ payload }: Parameters<SignInControllerInterface['action']>[0]): Promise<void> {
    const state = await this.readRouteState();
    let result: LoginWithIdentificationEntity;

    try {
      result = await this.authService.signInByCredentials(state.phone, payload.password);
    } catch (error) {
      return this.handleError(error);
    }

    if (isPendingIdentification(result)) {
      await this.navigate.to(ReidentificationRoute, {
        state: {
          expiresAt: result.data.expiresAt,
          identificationLink: result.data.identificationLink,
          requestUuid: result.data.requestUuid,
        },
      });
      return;
    }

    await this.navigate.to(SetSignInCodeRoute, { state: { phone: state.phone } });
  }

  private async handleError(error: unknown): Promise<never> {
    const code = getErrorCode(error);

    if (code === '206' || code === '216') {
      await this.navigate.to(AuthBlockedRoute, {
        state: { title: 'Доступ к аккаунту ограничен' },
      });
      throw error;
    }

    if (code === '207') {
      await this.navigate.to(AuthBlockedRoute, {
        state: { title: 'Доступ к аккаунту временно ограничен' },
      });
      throw error;
    }

    if (code === '210') {
      await this.userRequest.alert({
        description: 'Попробуйте повторить операцию позже',
        title: 'Слишком много попыток',
      });
      throw error;
    }

    if (error instanceof BadRequestException) {
      throw new InvalidCredentialsError({ cause: error });
    }

    await this.userRequest.alert({
      description: 'Попробуйте повторить операцию позже',
      title: 'Что-то пошло не так',
    });
    throw error;
  }

  private async readRouteState(): Promise<SignInRouteStateEntity> {
    const state = plainToInstance(SignInRouteStateEntity, this.location.location?.state ?? {});

    await validateOrReject(state);

    return state;
  }
}

const getErrorCode = (error: unknown): string | null => {
  if (!(error instanceof BadRequestException) || typeof error.response !== 'object' || error.response === null) {
    return null;
  }

  const payload = Reflect.get(error.response, 'error');
  const code = typeof payload === 'object' && payload !== null ? Reflect.get(payload, 'code') : null;

  return typeof code === 'string' ? code : null;
};

const isPendingIdentification = (result: LoginWithIdentificationEntity): result is LoginPendingIdentificationEntity =>
  result.nextAction === 'PendingIdentification';
