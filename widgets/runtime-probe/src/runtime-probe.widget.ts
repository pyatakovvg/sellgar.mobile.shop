import { UseBindings } from '@sellgar/app';
import { Widget, WidgetDefinition } from '@sellgar/app/native';

import { RuntimeProbeBindings } from './classes/runtime-probe.bindings.ts';
import { WidgetView } from './view/widget.view.tsx';

@UseBindings(RuntimeProbeBindings)
@Widget({ view: WidgetView })
export class RuntimeProbeWidget extends WidgetDefinition {}
