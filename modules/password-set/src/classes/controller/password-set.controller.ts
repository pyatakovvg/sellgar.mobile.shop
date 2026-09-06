import { AuthServiceInterface } from '@library/domain';
import { SetSignInCodeRoute } from '@library/route-tokens';
import {
  Controller,
  Inject,
  LocationServiceInterface,
  NavigateServiceInterface,
  UserRequestServiceInterface,
} from '@sellgar/app';
import { plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';

import { PasswordSetControllerInterface } from './password-set-controller.interface.ts';
import { PasswordSetRouteStateEntity } from './domain/password-set-route-state.entity.ts';

@Controller()
export class PasswordSetController extends PasswordSetControllerInterface {
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

  async loader(): Promise<PasswordSetRouteStateEntity> {
    return this.readRouteState();
  }

  async action({ payload }: Parameters<PasswordSetControllerInterface['action']>[0]): Promise<void> {
    const state = await this.readRouteState();

    try {
      await this.authService.passwordReset({
        password: payload.password,
        passwordResetToken: state.passwordResetToken,
        phone: state.phone,
      });
    } catch (error) {
      await this.userRequest.alert({
        description: 'Попробуйте повторить операцию позже',
        title: 'Что-то пошло не так',
      });
      throw error;
    }

    await this.navigate.to(SetSignInCodeRoute);
  }

  private async readRouteState(): Promise<PasswordSetRouteStateEntity> {
    const state = plainToInstance(PasswordSetRouteStateEntity, this.location.location?.state ?? {});

    await validateOrReject(state);

    return state;
  }
}
