import type { ControllerArgs, WithPayload } from '@sellgar/app';

export interface ConfirmAccessCodeInput {
  readonly code: string;
}

export abstract class ConfirmAccessCodeControllerInterface {
  abstract action(args: ControllerArgs<WithPayload<ConfirmAccessCodeInput>>): Promise<void>;
}
