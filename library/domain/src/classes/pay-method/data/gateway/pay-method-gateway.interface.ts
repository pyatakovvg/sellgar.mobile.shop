import type { PayMethodVerifyInput } from './input/pay-method-verify.input.ts';
import { PayMethodVerifyResultEntity } from '../../domain/pay-method-verify-result.entity.ts';
import type { MethodPayInput } from './input/method-pay.input.ts';

import { PayMethodResultEntity } from '../../domain/pay-method-result.entity.ts';
import { DraftOperationResultEntity } from '../../../operation';

export abstract class PayMethodGatewayInterface {
  abstract pay(values: MethodPayInput): Promise<DraftOperationResultEntity>;
  abstract verify(value: PayMethodVerifyInput): Promise<PayMethodVerifyResultEntity>;
  abstract getByGroupIdAndName(groupId: number, methodName: string): Promise<PayMethodResultEntity>;
}
