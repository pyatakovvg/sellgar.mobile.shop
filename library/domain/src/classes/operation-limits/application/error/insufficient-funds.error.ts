import { Exception } from '@sellgar/app';

export class InsufficientFundsError extends Exception {
  constructor() {
    super('Недостаточно средств');
  }
}
