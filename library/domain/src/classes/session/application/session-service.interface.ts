import type { SessionLogoutInput } from '../data/gateway/input/session-logout.input.ts';
import type { SessionCreateInput } from '../data/gateway/input/session-create.input.ts';

import { SessionEntity } from '../domain/session.entity.ts';

export abstract class SessionServiceInterface {
  abstract create(dto: SessionCreateInput): Promise<SessionEntity>;
  abstract logout(dto: SessionLogoutInput): Promise<boolean>;
}
