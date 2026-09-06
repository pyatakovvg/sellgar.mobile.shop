import type { ControllerArgs } from '@sellgar/app';

export abstract class ExitSignInByCodeControllerInterface {
  abstract action(args: ControllerArgs): Promise<void>;
}
