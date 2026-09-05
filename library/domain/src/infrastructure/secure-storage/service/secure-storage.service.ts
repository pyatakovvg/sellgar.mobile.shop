import { SecureStorageServiceInterface } from './secure-storage-service.interface.ts';
import { createMMKV, type MMKV } from 'react-native-mmkv';
import DeviceInfo from 'react-native-device-info';
import { Inject, Injectable } from '@sellgar/app';
import { ConfigInterface } from '../../../infrastructure/config';

@Injectable()
export class SecureStorageService implements SecureStorageServiceInterface {
  private readonly storage: MMKV;
  constructor(@Inject(ConfigInterface) private readonly config: ConfigInterface) {
    this.storage = createMMKV({
      id: `${DeviceInfo.getUniqueId}-storage`,
      encryptionKey: this.config.get('SECURE_STORAGE_SECRET_KEY'),
      mode: 'single-process',
    });
  }
  getItem(key: string) {
    if (!this.hasItem(key)) {
      return '';
    }
    return this.storage.getString(key)!;
  }
  setItem(key: string, value: string) {
    return this.storage.set(key, value);
  }
  deleteItem(key: string) {
    return this.storage.remove(key);
  }
  clearAll() {
    return this.storage.clearAll();
  }
  hasItem(key: string) {
    return this.storage.contains(key);
  }
}
