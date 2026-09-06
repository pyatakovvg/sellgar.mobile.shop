import { UseBindings } from '@sellgar/app';
import { Widget, WidgetDefinition } from '@sellgar/app/native';

import type { OtpWidgetProps } from './otp-widget.props.ts';
import { OtpBindings } from './classes/otp.bindings.ts';
import { OtpView } from './view/otp.view.tsx';

@UseBindings(OtpBindings)
@Widget({ view: OtpView })
export class OtpWidget extends WidgetDefinition<OtpWidgetProps> {}
