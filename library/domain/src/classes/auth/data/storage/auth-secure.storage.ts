import { Inject, Injectable } from '@sellgar/app';
import { SecureStorageServiceInterface } from '../../../../infrastructure/secure-storage';
import { AuthStorageInterface } from './auth-storage.interface.ts';

@Injectable()
export class AuthSecureStorage implements AuthStorageInterface {
  constructor(
    @Inject(SecureStorageServiceInterface) private readonly secureStorageService: SecureStorageServiceInterface,
  ) {}

  getAccessToken() {
    return this.secureStorageService.getItem('access_token');
  }

  getRefreshToken() {
    return this.secureStorageService.getItem('refresh_token');
  }

  getExpirationDate() {
    return this.secureStorageService.getItem('exp_date');
  }

  setAccessToken(value: string) {
    this.secureStorageService.setItem('access_token', value);
  }

  setRefreshToken(value: string) {
    this.secureStorageService.setItem('refresh_token', value);
  }

  setExpirationDate(value: string) {
    this.secureStorageService.setItem('exp_date', value);
  }

  checkExpirationDate() {
    const expirationStorageString = this.secureStorageService.getItem('exp_date');

    if (!expirationStorageString) {
      return true;
    }

    const currentDate = new Date().toISOString();
    const expirationDate = new Date(expirationStorageString).toISOString();

    return currentDate > expirationDate;
  }

  clear() {
    this.secureStorageService.deleteItem('access_token');
    this.secureStorageService.deleteItem('refresh_token');
    this.secureStorageService.deleteItem('exp_date');
  }
}
