import { TerminalEntity } from '../domain/terminal.entity.ts';

export abstract class TerminalServiceInterface {
  abstract getAll(): Promise<TerminalEntity[]>;
}
