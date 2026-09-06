import type { ControllerArgs, WithPayload } from '@sellgar/app';

export type ReidentificationConfirmAction = 'cancel' | 'confirm';

export abstract class ReidentificationConfirmControllerInterface {
  abstract action(args: ControllerArgs<WithPayload<ReidentificationConfirmAction>>): Promise<void>;
  abstract loader(args: ControllerArgs): Promise<void>;
}
