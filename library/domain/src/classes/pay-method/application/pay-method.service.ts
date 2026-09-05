import { Inject, Injectable } from '@sellgar/app';

import type { PayMethodVerifyInput } from '../data/gateway/input/pay-method-verify.input.ts';
import { PayMethodVerifyResultEntity } from '../domain/pay-method-verify-result.entity.ts';
import type { MethodPayInput } from '../data/gateway/input/method-pay.input.ts';

import { DraftOperationResultEntity } from '../../operation';
import { PayMethodFactory } from './pay-method.factory.ts';
import { ConfigInterface } from '../../../infrastructure/config';

import { PayMethodGatewayInterface } from '../data/gateway/pay-method-gateway.interface.ts';

import { PayMethodServiceInterface } from './pay-method-service.interface.ts';

@Injectable()
export class PayMethodService implements PayMethodServiceInterface {
  constructor(
    @Inject(PayMethodGatewayInterface) private readonly payMethodGateway: PayMethodGatewayInterface,
    @Inject(ConfigInterface) private readonly config: ConfigInterface,
  ) {}

  async pay(values: MethodPayInput): Promise<DraftOperationResultEntity> {
    return await this.payMethodGateway.pay(values);
  }

  async verify(value: PayMethodVerifyInput): Promise<PayMethodVerifyResultEntity> {
    return await this.payMethodGateway.verify(value);
  }

  async getByGroupIdAndName(groupId: number, methodName: string) {
    if (methodName === 'liberalitas') {
      const method = PayMethodFactory.create({
        title: 'Liberalitas',
        description: 'Оплата\n«Liberalitas»',
        method: 'liberalitas',
        options: [],
      });

      return {
        success: true,
        data: method,
        meta: {},
      };
    }

    if (methodName === 'satty_zhuldys') {
      const method = PayMethodFactory.create({
        title: 'Сәтті Жұлдыз',
        description: 'Оплата\n«Сәтті Жұлдыз»',
        method: 'satty_zhuldys',
        options: [],
      });

      return {
        success: true,
        data: method,
        meta: {},
      };
    }
    const result = await this.payMethodGateway.getByGroupIdAndName(groupId, methodName);
    if (result.data?.appearance?.iconUrl) {
      result.data.appearance.iconUrl = this.config.get('GATEWAY_HOST_API') + result.data.appearance.iconUrl;
      return result;
    }
    return result;
  }
}
