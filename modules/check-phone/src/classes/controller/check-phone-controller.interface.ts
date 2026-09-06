import type { ControllerArgs, WithPayload } from '@sellgar/app';

export interface CheckPhoneInput {
  readonly phone: string;
}

export abstract class CheckPhoneControllerInterface {
  abstract action(args: ControllerArgs<WithPayload<CheckPhoneInput>>): Promise<void>;
}
