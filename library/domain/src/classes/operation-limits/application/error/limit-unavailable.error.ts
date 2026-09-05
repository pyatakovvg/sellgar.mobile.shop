import { Exception } from '@sellgar/app';

export class LimitUnavailableError extends Exception {
  constructor() {
    super('Лимит недоступен');
  }
}
