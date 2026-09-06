import { Exception } from '@sellgar/app';

export class AccessCodesMismatchError extends Exception {
  constructor() {
    super('Код не совпадает');
  }
}
