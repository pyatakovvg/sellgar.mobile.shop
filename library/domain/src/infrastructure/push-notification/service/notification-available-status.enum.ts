import { AuthorizationStatus } from '@react-native-firebase/messaging';

export enum ENotificationAvailableStatus {
  DENIED = AuthorizationStatus.DENIED,
  NOT_DETERMINED = AuthorizationStatus.NOT_DETERMINED,
  AUTHORIZED = AuthorizationStatus.AUTHORIZED,
  PROVISIONAL = AuthorizationStatus.PROVISIONAL,
  EPHEMERAL = AuthorizationStatus.EPHEMERAL,
}
