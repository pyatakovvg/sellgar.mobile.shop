import { TerminalEntity } from '../../domain/terminal.entity.ts';

export abstract class TerminalGatewayInterface {
  abstract getAll(): Promise<TerminalEntity[]>;
}
