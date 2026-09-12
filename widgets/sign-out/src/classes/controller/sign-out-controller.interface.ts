import type { ControllerArgs } from '@sellgar/app';

export abstract class SignOutControllerInterface {
  abstract action(args: ControllerArgs): Promise<void>;
}
