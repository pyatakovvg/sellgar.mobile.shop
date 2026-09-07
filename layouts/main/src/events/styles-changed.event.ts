import type { StyleProp, ViewStyle } from 'react-native';

export class StylesChangedEvent {
  constructor(readonly styles?: StyleProp<ViewStyle>) {}
}
