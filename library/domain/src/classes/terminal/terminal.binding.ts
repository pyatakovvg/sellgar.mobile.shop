import { BindingModuleInterface, type BindingRegistryInterface } from '@sellgar/app';

import { TerminalGatewayInterface } from './data/gateway/terminal-gateway.interface.ts';
import { TerminalGateway } from './data/gateway/terminal.gateway.ts';
import { TerminalServiceInterface } from './application/terminal-service.interface.ts';
import { TerminalService } from './application/terminal.service.ts';

export class TerminalBinding extends BindingModuleInterface {
  register(registry: BindingRegistryInterface): void {
    registry.bind(TerminalGatewayInterface).to(TerminalGateway);
    registry.bind(TerminalServiceInterface).to(TerminalService);
  }
}
