import type { ControllerArgs, WithPayload } from '@sellgar/app';

import type { PasswordSetRouteStateEntity } from './domain/password-set-route-state.entity.ts';

export interface PasswordSetInput {
  readonly password: string;
}

export abstract class PasswordSetControllerInterface {
  abstract action(args: ControllerArgs<WithPayload<PasswordSetInput>>): Promise<void>;
  abstract loader(args: ControllerArgs): Promise<PasswordSetRouteStateEntity>;
}
