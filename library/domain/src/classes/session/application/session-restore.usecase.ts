import { Inject, Injectable } from '@sellgar/app';

import { DeviceInfoServiceInterface } from '../../../infrastructure/device-info';
import { AuthServiceInterface } from '../../auth';
import { SessionStorageInterface } from '../data/storage/session-storage.interface.ts';

import { SessionRestoreUsecaseInterface } from './session-restore-usecase.interface.ts';

@Injectable()
export class SessionRestoreUsecase implements SessionRestoreUsecaseInterface {
  constructor(
    @Inject(SessionStorageInterface) private readonly sessionStorage: SessionStorageInterface,
    @Inject(AuthServiceInterface) private readonly authService: AuthServiceInterface,
    @Inject(DeviceInfoServiceInterface) private readonly deviceInfoService: DeviceInfoServiceInterface,
  ) {}

  async execute() {
    const sessionUuid = this.sessionStorage.getSessionUuid();
    const userUuid = this.sessionStorage.getUserUuid();
    const hashCode = this.sessionStorage.getHashCode();
    const fingerprint = await this.deviceInfoService.getFingerprint(hashCode);

    await this.authService.restore({
      sessionUuid,
      userUuid,
      fingerprint,
    });
  }
}
