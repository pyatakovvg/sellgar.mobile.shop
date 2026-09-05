import { Inject, Injectable } from '@sellgar/app';

import { AuthServiceInterface } from '../../auth';
import { DeviceInfoServiceInterface } from '../../../infrastructure/device-info';
import { SessionStorageInterface } from '../data/storage/session-storage.interface.ts';

import { ClearAuthUserDataUsecaseInterface } from './clear-auth-user-data-usecase.interface.ts';

@Injectable()
export class ClearAuthUserDataUsecase implements ClearAuthUserDataUsecaseInterface {
  constructor(
    @Inject(AuthServiceInterface) private readonly authService: AuthServiceInterface,
    @Inject(SessionStorageInterface) private readonly sessionStorage: SessionStorageInterface,
    @Inject(DeviceInfoServiceInterface)
    private readonly deviceInfoService: DeviceInfoServiceInterface,
  ) {}

  execute() {
    this.sessionStorage.clear();
    this.authService.clearCredentials();
    this.deviceInfoService.clearClientDeviceSalt();
  }
}
