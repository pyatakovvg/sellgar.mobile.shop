import type { AuthStartEntity, OtpEntity } from '@library/domain';
import type { ControllerArgs, WithPayload } from '@sellgar/app';

export interface CheckPhoneInput {
  readonly phone: string;
}

export interface CheckPhoneResult {
  readonly nextAction: AuthStartEntity['nextAction'];
  readonly phone: string;
  readonly requestUuid: string;
  readonly verification?: OtpEntity;
}

export abstract class CheckPhoneControllerInterface {
  abstract action(args: ControllerArgs<WithPayload<CheckPhoneInput>>): Promise<CheckPhoneResult>;
}
