import { AuthServiceInterface, getAuthAccessRestriction, ReidentificationFlowServiceInterface } from '@library/domain';
import type { LoginPendingIdentificationEntity, LoginWithIdentificationEntity } from '@library/domain';
import { AuthBlockedRoute, ReidentificationConfirmRoute, SetSignInCodeRoute } from '@library/route-tokens';
import {
  BadRequestException,
  Controller,
  Inject,
  LocationServiceInterface,
  NavigateServiceInterface,
  UserRequestServiceInterface,
} from '@sellgar/app';
import { uuid } from '@utils/generate';
import { plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';

import { InvalidCredentialsError } from '../error/invalid-credentials.error.ts';
import { SignInControllerInterface, type SignInLoaderData } from './sign-in-controller.interface.ts';
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
    @Inject(ReidentificationFlowServiceInterface)
    private readonly reidentification: ReidentificationFlowServiceInterface,
    @Inject(UserRequestServiceInterface)
    private readonly userRequest: UserRequestServiceInterface,
  ) {
    super();
  }

  async loader(): Promise<SignInLoaderData> {
    const state = await this.readRouteState();

    return {
      passwordResetRequestUuid: uuid(),
      phone: state.phone,
    };
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
      this.reidentification.begin({
        identification: result.data,
        password: payload.password,
        phone: state.phone,
      });

      try {
        await this.navigate.to(ReidentificationConfirmRoute);
      } catch (error) {
        this.reidentification.clear();
        throw error;
      }

      return;
    }

    await this.navigate.to(SetSignInCodeRoute, {
      replace: true,
      state: { phone: state.phone },
    });
  }

  private async handleError(error: unknown): Promise<void> {
    const restriction = getAuthAccessRestriction(error);

    if (restriction) {
      await this.navigate.to(AuthBlockedRoute, {
        state: {
          title: restriction === 'temporary' ? 'Доступ к аккаунту временно ограничен' : 'Доступ к аккаунту ограничен',
        },
      });
      return;
    }

    const code = getErrorCode(error);

    if (code === '210') {
      await this.userRequest.alert({
        description: 'Попробуйте повторить операцию позже',
        title: 'Слишком много попыток',
      });
      return;
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
