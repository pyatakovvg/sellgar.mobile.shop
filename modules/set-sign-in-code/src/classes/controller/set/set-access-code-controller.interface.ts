import type { ControllerArgs, WithPayload } from '@sellgar/app';

export interface SetAccessCodeInput {
  readonly code: string;
}

export interface SetAccessCodeResult {
  readonly step: 'confirm';
}

export abstract class SetAccessCodeControllerInterface {
  abstract action(args: ControllerArgs<WithPayload<SetAccessCodeInput>>): Promise<SetAccessCodeResult>;
}
