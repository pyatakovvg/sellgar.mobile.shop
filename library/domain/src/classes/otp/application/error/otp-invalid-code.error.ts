import { Exception } from '@sellgar/app';

export class OtpInvalidCodeError extends Exception {
  constructor() {
    super('Введён неверный код');
  }
}
