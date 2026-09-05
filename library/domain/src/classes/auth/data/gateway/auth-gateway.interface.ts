import { AuthResultEntity } from '../../domain/auth-result.entity.ts';
import { AuthStartResultEntity } from '../../domain/auth-start-result.entity.ts';
import { LoginWithIdentificationEntity } from '../../domain/login-with-identification.entity.ts';
import { ReidentificationStatusEntity } from '../../domain/reidentification-status.entity.ts';

import type { SessionRestoreInput } from './input/session-restore.input.ts';
import type { PasswordResetInput } from './input/password-reset.input.ts';
import type { AuthStartInput } from './input/auth-start.input.ts';

export abstract class AuthGatewayInterface {
  abstract refresh(refreshToken: string): Promise<AuthResultEntity>;
  abstract restore(dto: SessionRestoreInput): Promise<AuthResultEntity>;
  abstract signInByCredentials(phone: string, password: string): Promise<LoginWithIdentificationEntity>;
  abstract getReidentificationStatus(requestUuid: string): Promise<ReidentificationStatusEntity>;
  abstract passwordReset(dto: PasswordResetInput): Promise<AuthResultEntity>;
  abstract startAuth(dto: AuthStartInput): Promise<AuthStartResultEntity>;
}
