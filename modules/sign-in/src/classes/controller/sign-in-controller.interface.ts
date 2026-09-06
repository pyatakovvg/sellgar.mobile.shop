import type { ControllerArgs, WithPayload } from '@sellgar/app';

export interface SignInInput {
  readonly password: string;
}

export interface SignInLoaderData {
  readonly passwordResetRequestUuid: string;
  readonly phone: string;
}

export abstract class SignInControllerInterface {
  abstract action(args: ControllerArgs<WithPayload<SignInInput>>): Promise<void>;
  abstract loader(args: ControllerArgs): Promise<SignInLoaderData>;
}
