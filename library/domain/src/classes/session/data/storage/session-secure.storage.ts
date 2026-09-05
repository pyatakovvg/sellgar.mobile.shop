import { Inject, Injectable } from '@sellgar/app';
import { SecureStorageServiceInterface } from '../../../../infrastructure/secure-storage';
import { SessionStorageInterface } from './session-storage.interface.ts';

@Injectable()
export class SessionSecureStorage implements SessionStorageInterface {
  constructor(
    @Inject(SecureStorageServiceInterface) private readonly secureStorageService: SecureStorageServiceInterface,
  ) {}

  getSessionUuid() {
    return this.secureStorageService.getItem('sessionUuid');
  }

  getUserUuid() {
    return this.secureStorageService.getItem('userUuid');
  }

  getHashCode() {
    return this.secureStorageService.getItem('hashCode');
  }

  setSessionUuid(value: string) {
    this.secureStorageService.setItem('sessionUuid', value);
  }

  setUserUuid(value: string) {
    this.secureStorageService.setItem('userUuid', value);
  }

  setHashCode(value: string) {
    this.secureStorageService.setItem('hashCode', value);
  }

  deleteSessionUuid() {
    this.secureStorageService.deleteItem('sessionUuid');
  }

  deleteUserUuid() {
    this.secureStorageService.deleteItem('userUuid');
  }

  deleteHashCode() {
    this.secureStorageService.deleteItem('hashCode');
  }

  clear() {
    this.deleteSessionUuid();
    this.deleteUserUuid();
    this.deleteHashCode();
  }
}
