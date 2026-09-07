import { Inject, Injectable, RequestExecutorInterface } from '@sellgar/app';
import { validateOrReject } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { ConfigInterface } from '../../../../infrastructure/config';
import { DeviceInfoServiceInterface } from '../../../../infrastructure/device-info';
import { HttpRequest } from '../../../../infrastructure/http-client';
import { PayCategoryGatewayInterface } from './pay-category-gateway.interface.ts';

import { PayCategoryResultEntity } from '../../domain/pay-category-result.entity.ts';

@Injectable()
export class PayCategoryGateway implements PayCategoryGatewayInterface {
  constructor(
    @Inject(ConfigInterface) private readonly config: ConfigInterface,
    @Inject(DeviceInfoServiceInterface) private readonly deviceService: DeviceInfoServiceInterface,
    @Inject(RequestExecutorInterface) private readonly requestExecutor: RequestExecutorInterface,
  ) {}

  async getAll() {
    const result = await this.requestExecutor.run({ scope: 'pay-categories:list' }, async ({ signal }) => {
      const request = new HttpRequest({ clientDevice: await this.deviceService.getClientDeviceHeader(), signal });
      return request.get(this.config.get('GATEWAY_WALLETS_BFF_API') + '/v1/services/groups');
    });
    const resultInstance = plainToInstance(PayCategoryResultEntity, result);

    await validateOrReject(resultInstance);

    return resultInstance;
  }
}
