import { AuthEntity } from '../domain/auth.entity.ts';
import { AuthStartEntity } from '../domain/auth-start.entity.ts';
import { LoginWithIdentificationEntity } from '../domain/login-with-identification.entity.ts';
import { ReidentificationStatusEntity } from '../domain/reidentification-status.entity.ts';

import type { SessionRestoreInput } from '../data/gateway/input/session-restore.input.ts';
import type { PasswordResetInput } from '../data/gateway/input/password-reset.input.ts';
import type { AuthStartInput } from '../data/gateway/input/auth-start.input.ts';

export abstract class AuthServiceInterface {
  abstract getAccessToken(): string;
  abstract isAccessTokenExpired(): boolean;
  abstract refreshStoredCredentials(): Promise<AuthEntity>;
  abstract restore(dto: SessionRestoreInput): Promise<AuthEntity>;
  abstract refresh(refreshToken: string): Promise<AuthEntity>;
  abstract signInByCredentials(phone: string, password: string): Promise<LoginWithIdentificationEntity>;
  abstract waitReidentificationFinalStatus(requestUuid: string, count?: number): Promise<ReidentificationStatusEntity>;
  abstract passwordReset(dto: PasswordResetInput): Promise<AuthEntity>;
  abstract startAuth(dto: AuthStartInput): Promise<AuthStartEntity>;
}
