import { Exception, type ExceptionOptions } from '@sellgar/app';

export class InvalidCredentialsError extends Exception {
  constructor(options?: ExceptionOptions) {
    super('Введён неверный пароль', options);
  }
}
