import { Inject, Injectable } from '@sellgar/app';
import { sha256, uuid } from '@utils/generate';

import DeviceInfo from 'react-native-device-info';

import { DeviceInfoServiceInterface } from './device-info-service.interface.ts';
import { StorageServiceInterface } from '../../storage';

const CLIENT_DEVICE_SALT_KEY = 'client_device_salt';

@Injectable()
export class DeviceInfoService implements DeviceInfoServiceInterface {
  private _clientDeviceFingerprint: string | null = null;
  private _clientDeviceFingerprintSalt: string | null = null;

  constructor(
    @Inject(StorageServiceInterface)
    private readonly storageService: StorageServiceInterface,
  ) {}

  getDeviceName() {
    return DeviceInfo.getBrand() + DeviceInfo.getModel();
  }

  getAppVersion() {
    return DeviceInfo.getVersion();
  }

  getPlatform(): 'android' | 'ios' {
    return DeviceInfo.getSystemName().toLowerCase() === 'android' ? 'android' : 'ios';
  }

  getBundleId() {
    return DeviceInfo.getBundleId();
  }

  async getDeviceUniqueId() {
    return await DeviceInfo.getUniqueId();
  }

  async getFingerprint(salt: string) {
    const deviceId = await this.getDeviceUniqueId();

    return await sha256(deviceId + this.getDeviceName() + salt);
  }

  updateClientDeviceSalt() {
    this.storageService.setItem(CLIENT_DEVICE_SALT_KEY, uuid());
  }

  clearClientDeviceSalt() {
    this.storageService.deleteItem(CLIENT_DEVICE_SALT_KEY);
  }

  async getClientDeviceHeader(): Promise<string | null> {
    try {
      const deviceId = await this.getDeviceUniqueId();
      const appVersion = this.getAppVersion();
      const fingerprint = await this._getClientDeviceFingerprint(deviceId, appVersion);
      return [
        `fingerprint=${fingerprint}`,
        `deviceId=${deviceId}`,
        `deviceName=${DeviceInfo.getModel()}`,
        `osName=${DeviceInfo.getSystemName()}`,
        `appVersion=${appVersion}`,
        `osVersion=${DeviceInfo.getSystemVersion()}`,
      ].join('&');
    } catch (_error) {
      return null;
    }
  }

  private async _getClientDeviceFingerprint(deviceId: string, appVersion: string): Promise<string> {
    const salt = this.storageService.getItem(CLIENT_DEVICE_SALT_KEY);

    if (this._clientDeviceFingerprint === null || this._clientDeviceFingerprintSalt !== salt) {
      this._clientDeviceFingerprint = await sha256(deviceId + appVersion + salt);
      this._clientDeviceFingerprintSalt = salt;
    }

    return this._clientDeviceFingerprint;
  }
}
