import { Inject, Injectable } from '@sellgar/app';

import { PayCategoryServiceInterface } from './pay-category-service.interface.ts';
import { PayCategoryGatewayInterface } from '../data/gateway/pay-category-gateway.interface.ts';

import { PayMethodEntity } from '../../pay-method';
import { ConfigInterface } from '../../../infrastructure/config';

@Injectable()
export class PayCategoryService implements PayCategoryServiceInterface {
  constructor(
    @Inject(PayCategoryGatewayInterface) private readonly payCategoryGateway: PayCategoryGatewayInterface,
    @Inject(ConfigInterface) private readonly config: ConfigInterface,
  ) {}

  private static getStaticMethods = () => {
    return [
      Object.assign(new PayMethodEntity(), {
        method: 'liberalitas',
        title: 'Liberalitas',
        description: 'Оплата «Liberalitas»',
      }),
      Object.assign(new PayMethodEntity(), {
        method: 'satty_zhuldys',
        title: 'Сәтті Жұлдыз',
        description: 'Оплата «Сәтті Жұлдыз»',
      }),
    ];
  };

  async getAll() {
    const result = await this.payCategoryGateway.getAll();
    const staticMethods = PayCategoryService.getStaticMethods();

    const mappedData = result.data.map((item) => {
      let methods = item.methods;

      if (item.id === 2) {
        methods = [...methods, ...staticMethods.filter((item) => ['liberalitas'].includes(item.method))];
      } else if (item.id === 3) {
        methods = [...methods, ...staticMethods.filter((item) => ['satty_zhuldys'].includes(item.method))];
      }

      methods = methods.map((method) => {
        if (method.appearance) {
          return {
            ...method,
            appearance: {
              ...method.appearance,
              iconUrl: method.appearance.iconUrl ? this.config.get('GATEWAY_HOST_API') + method.appearance.iconUrl : '',
            },
          };
        }
        return method;
      });

      return {
        ...item,
        methods,
      };
    });

    return {
      success: true,
      data: mappedData,
      meta: result.meta,
    };
  }
}
