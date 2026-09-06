import type { OtpEntity } from '@library/domain';
import type { ControllerArgs, WithPayload, WithProps } from '@sellgar/app';

import type { OtpWidgetProps } from '../../../otp-widget.props.ts';

export interface OtpResendInput {
  readonly token: string;
}

export abstract class OtpResendControllerInterface {
  abstract action(args: ControllerArgs<WithPayload<OtpResendInput, WithProps<OtpWidgetProps>>>): Promise<OtpEntity>;
}
