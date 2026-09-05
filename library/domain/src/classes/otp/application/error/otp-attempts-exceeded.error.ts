import { Exception } from '@sellgar/app';

export class OtpAttemptsExceededError extends Exception {
  constructor() {
    super('Попытки ввода кода исчерпаны.\nПопробуйте авторизоваться заново');
  }
}
