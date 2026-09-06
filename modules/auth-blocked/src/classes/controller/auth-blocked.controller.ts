import { Controller, Inject, LocationServiceInterface, NavigateServiceInterface } from '@sellgar/app';
import { plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';

import { AuthBlockedControllerInterface } from './auth-blocked-controller.interface.ts';
import { AuthBlockedRouteStateEntity } from './domain/auth-blocked-route-state.entity.ts';

@Controller()
export class AuthBlockedController extends AuthBlockedControllerInterface {
  constructor(
    @Inject(LocationServiceInterface)
    private readonly location: LocationServiceInterface,
    @Inject(NavigateServiceInterface)
    private readonly navigate: NavigateServiceInterface,
  ) {
    super();
  }

  action(): Promise<void> {
    return this.navigate.back();
  }

  async loader(): Promise<AuthBlockedRouteStateEntity> {
    const state = plainToInstance(AuthBlockedRouteStateEntity, this.location.location?.state ?? {});

    await validateOrReject(state);

    return state;
  }
}
