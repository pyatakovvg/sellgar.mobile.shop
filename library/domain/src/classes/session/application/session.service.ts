import { Inject, Injectable } from '@sellgar/app';

import type { SessionCreateInput } from '../data/gateway/input/session-create.input.ts';
import type { SessionLogoutInput } from '../data/gateway/input/session-logout.input.ts';

import { SessionEntity } from '../domain/session.entity.ts';

import { SessionServiceInterface } from './session-service.interface.ts';
import { SessionGatewayInterface } from '../data/gateway/session-gateway.interface.ts';

@Injectable()
export class SessionService implements SessionServiceInterface {
  constructor(@Inject(SessionGatewayInterface) private readonly sessionGateway: SessionGatewayInterface) {}

  async create(dto: SessionCreateInput): Promise<SessionEntity> {
    const result = await this.sessionGateway.create(dto);
    return result.data;
  }
  async logout(dto: SessionLogoutInput): Promise<boolean> {
    const result = await this.sessionGateway.logout(dto);
    return result.success;
  }
}
