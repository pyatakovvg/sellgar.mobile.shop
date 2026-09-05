export abstract class DeviceInfoServiceInterface {
  abstract getFingerprint(salt: string): Promise<string>;
  abstract getClientDeviceHeader(): Promise<string | null>;
  abstract updateClientDeviceSalt(): void;
  abstract clearClientDeviceSalt(): void;
  abstract getDeviceName(): string;
  abstract getDeviceUniqueId(): Promise<string>;
  abstract getAppVersion(): string;
  abstract getPlatform(): 'android' | 'ios';
  abstract getBundleId(): string;
}
