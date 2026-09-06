import type { OtpEntity } from '@library/domain';
import { PasswordResetOtpRoute } from '@library/route-tokens';
import type { ControllerArgs, RouteParams, WithParams } from '@sellgar/app';

export interface PasswordResetOtpLoaderData {
  readonly phone: string;
  readonly requestUuid: string;
  readonly token: string;
  readonly verification: OtpEntity;
}

type PasswordResetOtpControllerArgs = ControllerArgs<WithParams<RouteParams<typeof PasswordResetOtpRoute>>>;

export abstract class PasswordResetOtpControllerInterface {
  abstract action(args: PasswordResetOtpControllerArgs): Promise<void>;
  abstract loader(args: PasswordResetOtpControllerArgs): Promise<PasswordResetOtpLoaderData>;
}
