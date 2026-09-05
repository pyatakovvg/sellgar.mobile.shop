import { Exception } from '@sellgar/app';

export class OtpExpiredError extends Exception {
  constructor() {
    super('Истёк срок действия кода');
  }
}
