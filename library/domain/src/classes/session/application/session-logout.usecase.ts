import { Inject, Injectable } from '@sellgar/app';

import { DeviceInfoServiceInterface } from '../../../infrastructure/device-info';
import { SessionStorageInterface } from '../data/storage/session-storage.interface.ts';

import { SessionLogoutUsecaseInterface } from './session-logout-usecase.interface.ts';
import { SessionServiceInterface } from './session-service.interface.ts';

@Injectable()
export class SessionLogoutUsecase implements SessionLogoutUsecaseInterface {
  constructor(
    @Inject(SessionStorageInterface) private readonly sessionStorage: SessionStorageInterface,
    @Inject(SessionServiceInterface) private readonly sessionService: SessionServiceInterface,
    @Inject(DeviceInfoServiceInterface) private readonly deviceInfoService: DeviceInfoServiceInterface,
  ) {}

  async execute() {
    const sessionUuid = this.sessionStorage.getSessionUuid();
    const userUuid = this.sessionStorage.getUserUuid();
    const hashCode = this.sessionStorage.getHashCode();
    const fingerprint = await this.deviceInfoService.getFingerprint(hashCode);
    if (sessionUuid && userUuid && fingerprint) {
      await this.sessionService.logout({
        sessionUuid,
        userUuid,
        fingerprint,
      });
    }
  }
}
