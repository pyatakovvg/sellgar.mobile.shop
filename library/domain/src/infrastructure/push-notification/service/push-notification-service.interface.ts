import { ENotificationAvailableStatus } from './notification-available-status.enum.ts';

export abstract class PushNotificationServiceInterface {
  abstract getPermissionStatus(): Promise<ENotificationAvailableStatus>;
  abstract requestPermission(): Promise<ENotificationAvailableStatus>;
  abstract getToken(): Promise<string | undefined>;
  abstract onMessage(callback: (message: any) => void): () => void;
  abstract refreshToken(): Promise<void>;
  abstract unregister(): Promise<void>;
}
