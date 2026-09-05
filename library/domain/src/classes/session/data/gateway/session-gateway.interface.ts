import type { SessionCreateInput } from './input/session-create.input.ts';
import type { SessionLogoutInput } from './input/session-logout.input.ts';

import { SessionCreateResultEntity } from '../../domain/session-create-result.entity.ts';
import { SessionLogoutResultEntity } from '../../domain/session-logout-result.entity.ts';

export abstract class SessionGatewayInterface {
  abstract create(dto: SessionCreateInput): Promise<SessionCreateResultEntity>;
  abstract logout(dto: SessionLogoutInput): Promise<SessionLogoutResultEntity>;
}
