import { UseBindings } from '@sellgar/app';
import { Widget, WidgetDefinition } from '@sellgar/app/native';

import { SignOutBindings } from './classes/classes.bindings.ts';
import { WidgetView } from './view/widget.view.tsx';

@UseBindings(SignOutBindings)
@Widget({ view: WidgetView })
export class SignOutWidget extends WidgetDefinition {}
