import { PayMethodEntity } from '../domain/pay-method.entity.ts';

export class PayMethodFactory {
  static create(method: Partial<PayMethodEntity>) {
    const entity = new PayMethodEntity();
    return Object.assign(entity, method);
  }
}
