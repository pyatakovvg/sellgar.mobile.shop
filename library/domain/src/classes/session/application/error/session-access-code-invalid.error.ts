import { Exception } from '@sellgar/app';

export class SessionAccessCodeInvalidError extends Exception {
  constructor() {
    super('Неверный код доступа');
  }
}
