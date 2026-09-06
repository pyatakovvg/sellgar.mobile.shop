import type { OtpEntity } from '@library/domain';
import type { ControllerArgs, WithPayload, WithProps } from '@sellgar/app';

import type { OtpWidgetProps } from '../../../otp-widget.props.ts';

export interface OtpConfirmInput {
  readonly code: string;
  readonly token: string;
}

export abstract class OtpConfirmControllerInterface {
  abstract action(args: ControllerArgs<WithPayload<OtpConfirmInput, WithProps<OtpWidgetProps>>>): Promise<OtpEntity>;
}
