import type { ControllerArgs, WithPayload } from '@sellgar/app';

export interface SignInByCodeInput {
  readonly code: string;
}

export abstract class SignInByCodeControllerInterface {
  abstract action(args: ControllerArgs<WithPayload<SignInByCodeInput>>): Promise<void>;
}
