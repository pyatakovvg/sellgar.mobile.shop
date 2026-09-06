import { Inject, Injectable } from '@sellgar/app';

import { AuthStorageInterface } from '../../auth';
import { DeviceInfoServiceInterface } from '../../../infrastructure/device-info';
import { SessionStorageInterface } from '../data/storage/session-storage.interface.ts';

import { ClearAuthUserDataUsecaseInterface } from './clear-auth-user-data-usecase.interface.ts';

@Injectable()
export class ClearAuthUserDataUsecase implements ClearAuthUserDataUsecaseInterface {
  constructor(
    @Inject(AuthStorageInterface)
    private readonly authStorage: AuthStorageInterface,
    @Inject(SessionStorageInterface) private readonly sessionStorage: SessionStorageInterface,
    @Inject(DeviceInfoServiceInterface)
    private readonly deviceInfoService: DeviceInfoServiceInterface,
  ) {}

  execute() {
    this.sessionStorage.clear();
    this.authStorage.clear();
    this.deviceInfoService.clearClientDeviceSalt();
  }
}
