import { Layout } from '@sellgar/app/native';

import { BackgroundImageChangedEvent } from './events/background-image-changed.event.ts';
import { StylesChangedEvent } from './events/styles-changed.event.ts';
import { LayoutView } from './view/layout.view.tsx';

@Layout({ view: LayoutView })
export class MainLayout {
  static readonly StylesChangedEvent = StylesChangedEvent;
  static readonly BackgroundImageChangedEvent = BackgroundImageChangedEvent;
}
