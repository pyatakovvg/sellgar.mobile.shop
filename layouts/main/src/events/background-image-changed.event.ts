import type { ImageSourcePropType } from 'react-native';

export class BackgroundImageChangedEvent {
  constructor(readonly source?: ImageSourcePropType) {}
}
