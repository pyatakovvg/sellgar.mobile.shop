import type { ControllerArgs, WithPayload } from '@sellgar/app';

import type { SignInRouteStateEntity } from './domain/sign-in-route-state.entity.ts';

export interface SignInInput {
  readonly password: string;
}

export abstract class SignInControllerInterface {
  abstract action(args: ControllerArgs<WithPayload<SignInInput>>): Promise<void>;
  abstract loader(args: ControllerArgs): Promise<SignInRouteStateEntity>;
}
