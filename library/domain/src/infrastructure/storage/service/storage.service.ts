import { StorageServiceInterface } from './storage-service.interface.ts';
import { createMMKV, type MMKV } from 'react-native-mmkv';
import DeviceInfo from 'react-native-device-info';
import { Injectable } from '@sellgar/app';

@Injectable()
export class StorageService implements StorageServiceInterface {
  private readonly storage: MMKV;
  constructor() {
    this.storage = createMMKV({
      id: `${DeviceInfo.getUniqueId}-open-storage`,
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
