import { Injectable } from '@sellgar/app';
import { validateOrReject } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { TerminalGatewayInterface } from './terminal-gateway.interface.ts';

import { TerminalEntity } from '../../domain/terminal.entity.ts';

@Injectable()
export class TerminalGateway implements TerminalGatewayInterface {
  async getAll(): Promise<TerminalEntity[]> {
    const result = (await import('./terminals.json')).default;
    const resultInstances = plainToInstance(TerminalEntity, result);

    for (let resultInstance of resultInstances) {
      await validateOrReject(resultInstance);
    }

    return resultInstances;
  }
}
