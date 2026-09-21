import { Inject, Injectable } from '@sellgar/app';

import type { SessionRestoreInput } from '../data/gateway/input/session-restore.input.ts';
import type { PasswordResetInput } from '../data/gateway/input/password-reset.input.ts';
import type { AuthStartInput } from '../data/gateway/input/auth-start.input.ts';

import { AuthEntity } from '../domain/auth.entity.ts';
import { AuthStartEntity } from '../domain/auth-start.entity.ts';
import { LoginWithIdentificationEntity } from '../domain/login-with-identification.entity.ts';
import { ReidentificationStatusEntity } from '../domain/reidentification-status.entity.ts';
import { AuthPollingAttemptsExceededError } from './error/auth-polling-attempts-exceeded.error.ts';

import { AuthServiceInterface } from './auth-service.interface.ts';
import { AuthGatewayInterface } from '../data/gateway/auth-gateway.interface.ts';
import { AuthStorageInterface } from '../data/storage/auth-storage.interface.ts';

@Injectable()
export class AuthService implements AuthServiceInterface {
  constructor(
    @Inject(AuthGatewayInterface) private readonly authGateway: AuthGatewayInterface,
    @Inject(AuthStorageInterface) private readonly authStorage: AuthStorageInterface,
  ) {}

  getAccessToken(): string {
    return this.authStorage.getAccessToken();
  }

  isAccessTokenExpired(): boolean {
    return this.authStorage.checkExpirationDate();
  }

  refreshStoredCredentials(): Promise<AuthEntity> {
    return this.refresh(this.authStorage.getRefreshToken());
  }

  async signInByCredentials(phone: string, password: string): Promise<LoginWithIdentificationEntity> {
    const result = await this.authGateway.signInByCredentials(phone, password);

    if (result.nextAction === 'Tokens') {
      this.saveCredentials(result.data);
    }

    return result;
  }

  async waitReidentificationFinalStatus(
    requestUuid: string,
    count: number = 10,
  ): Promise<ReidentificationStatusEntity> {
    for (let attempt = 0; attempt < count; attempt++) {
      const result = await this.authGateway.getReidentificationStatus(requestUuid);

      if (result.status !== 'Created') {
        return result;
      }

      if (attempt < count - 1) {
        await new Promise<void>((resolve) => setTimeout(resolve, 1000));
      }
    }

    throw new AuthPollingAttemptsExceededError();
  }

  async restore(dto: SessionRestoreInput): Promise<AuthEntity> {
    const result = await this.authGateway.restore(dto);
    this.saveCredentials(result.data);
    return result.data;
  }

  async refresh(refreshToken: string): Promise<AuthEntity> {
    const result = await this.authGateway.refresh(refreshToken);
    this.saveCredentials(result.data);
    return result.data;
  }

  async passwordReset(dto: PasswordResetInput): Promise<AuthEntity> {
    const result = await this.authGateway.passwordReset(dto);
    this.saveCredentials(result.data);
    return result.data;
  }

  async startAuth(dto: AuthStartInput): Promise<AuthStartEntity> {
    const result = await this.authGateway.startAuth(dto);
    return result.data;
  }

  private saveCredentials(credentials: AuthEntity): void {
    this.authStorage.setAccessToken(credentials.accessToken);
    this.authStorage.setRefreshToken(credentials.refreshToken);
    this.authStorage.setExpirationDate(credentials.expires);
  }
}
