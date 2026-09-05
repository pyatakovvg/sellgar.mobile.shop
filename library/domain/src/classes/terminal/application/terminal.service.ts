import { Inject, Injectable } from '@sellgar/app';

import { TerminalServiceInterface } from './terminal-service.interface.ts';
import { TerminalGatewayInterface } from '../data/gateway/terminal-gateway.interface.ts';

@Injectable()
export class TerminalService implements TerminalServiceInterface {
  constructor(@Inject(TerminalGatewayInterface) private readonly terminalGateway: TerminalGatewayInterface) {}

  async getAll() {
    return this.terminalGateway.getAll();
  }
}
