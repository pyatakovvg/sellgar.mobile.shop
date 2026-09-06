import type { ControllerArgs } from '@sellgar/app';

import type { AuthBlockedRouteStateEntity } from './domain/auth-blocked-route-state.entity.ts';

export abstract class AuthBlockedControllerInterface {
  abstract action(args: ControllerArgs): Promise<void>;
  abstract loader(args: ControllerArgs): Promise<AuthBlockedRouteStateEntity>;
}
