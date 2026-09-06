import { PasswordResetOtpRoute } from '@library/route-tokens';
import { Controller, Inject, LocationServiceInterface, NavigateServiceInterface } from '@sellgar/app';
import { uuid } from '@utils/generate';
import { plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';

import { SignInRouteStateEntity } from '../domain/sign-in-route-state.entity.ts';
import { PasswordResetControllerInterface } from './password-reset-controller.interface.ts';

@Controller()
export class PasswordResetController extends PasswordResetControllerInterface {
  constructor(
    @Inject(LocationServiceInterface)
    private readonly location: LocationServiceInterface,
    @Inject(NavigateServiceInterface)
    private readonly navigate: NavigateServiceInterface,
  ) {
    super();
  }

  async action(): Promise<void> {
    const state = plainToInstance(SignInRouteStateEntity, this.location.location?.state ?? {});
    await validateOrReject(state);

    const requestUuid = uuid();

    await this.navigate.to(PasswordResetOtpRoute, {
      params: { requestUuid },
      state: {
        phone: state.phone,
      },
    });
  }
}
