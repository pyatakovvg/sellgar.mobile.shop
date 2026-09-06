import type { OtpEntity } from '@library/domain';
import type { ControllerArgs } from '@sellgar/app';

export interface AuthOtpLoaderData {
  readonly phone: string;
  readonly requestUuid: string;
  readonly token: string;
  readonly verification: OtpEntity;
}

export abstract class AuthOtpControllerInterface {
  abstract action(args: ControllerArgs): Promise<void>;
  abstract loader(args: ControllerArgs): Promise<AuthOtpLoaderData>;
}
