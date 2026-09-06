import type { TBiometry } from '@library/domain';
import type { ControllerArgs } from '@sellgar/app';

export abstract class BiometricSignInControllerInterface {
  abstract action(args: ControllerArgs): Promise<void>;
  abstract loader(args: ControllerArgs): Promise<TBiometry | null>;
}
