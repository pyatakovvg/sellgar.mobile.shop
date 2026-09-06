import { sha256 } from '@utils/generate';

import { Inject, Injectable } from '@sellgar/app';

import { SessionStorageInterface } from '../data/storage/session-storage.interface.ts';
import { SessionAccessCodeInvalidError } from './error/session-access-code-invalid.error.ts';
import { SessionRestoreUsecaseInterface } from './session-restore-usecase.interface.ts';
import { SessionUnlockUsecaseInterface } from './session-unlock-usecase.interface.ts';

@Injectable()
export class SessionUnlockUsecase implements SessionUnlockUsecaseInterface {
  constructor(
    @Inject(SessionStorageInterface)
    private readonly sessionStorage: SessionStorageInterface,
    @Inject(SessionRestoreUsecaseInterface)
    private readonly sessionRestore: SessionRestoreUsecaseInterface,
  ) {}

  available(): boolean {
    return Boolean(
      this.sessionStorage.getSessionUuid() && this.sessionStorage.getUserUuid() && this.sessionStorage.getHashCode(),
    );
  }

  async execute(code: string): Promise<void> {
    const storedHash = this.sessionStorage.getHashCode();
    const enteredHash = await sha256(code);

    if (!this.available() || enteredHash !== storedHash) {
      throw new SessionAccessCodeInvalidError();
    }

    await this.sessionRestore.execute();
  }
}
