import type { ControllerArgs } from '@sellgar/app';

export abstract class PasswordResetControllerInterface {
  abstract action(args: ControllerArgs): Promise<void>;
}
