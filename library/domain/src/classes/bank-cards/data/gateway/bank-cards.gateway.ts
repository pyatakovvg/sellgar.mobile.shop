import { Inject, Injectable, RequestExecutorInterface } from '@sellgar/app';
import { validateOrReject } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { ConfigInterface } from '../../../../infrastructure/config';
import { DeviceInfoServiceInterface } from '../../../../infrastructure/device-info';
import { HttpRequest } from '../../../../infrastructure/http-client';

import { BankCardsGatewayInterface } from './bank-cards-gateway.interface.ts';

import { BinCheckResultEntity } from '../../domain/bin-check-result.entity.ts';
import { BankCardResultEntity } from '../../domain/bank-card-result.entity.ts';
import { TBankCardCapabilities } from '../../domain/bank-card-capabilities.type.ts';
import { BankCardDeleteResultEntity } from '../../domain/bank-card-delete.entity.ts';

@Injectable()
export class BankCardsGateway implements BankCardsGatewayInterface {
  constructor(
    @Inject(ConfigInterface) private readonly config: ConfigInterface,
    @Inject(DeviceInfoServiceInterface) private readonly deviceService: DeviceInfoServiceInterface,
    @Inject(RequestExecutorInterface) private readonly requestExecutor: RequestExecutorInterface,
  ) {}

  async verify(bin: string): Promise<BinCheckResultEntity> {
    const result = await this.requestExecutor.run({ scope: 'bank-cards:verify' }, async ({ signal }) => {
      const request = new HttpRequest({ deviceId: await this.deviceService.getDeviceUniqueId(), signal });
      return request.post(this.config.get('GATEWAY_WALLETS_BFF_API') + '/v1/bank-cards/verify', { bin });
    });
    const resultInstance = plainToInstance(BinCheckResultEntity, result);

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  async getCards(capabilities?: TBankCardCapabilities): Promise<BankCardResultEntity> {
    const result = await this.requestExecutor.run({ scope: 'bank-cards:list' }, async ({ signal }) => {
      const request = new HttpRequest({ deviceId: await this.deviceService.getDeviceUniqueId(), signal });
      return request.get(this.config.get('GATEWAY_WALLETS_BFF_API') + '/v1/bank-cards/tokens', {
        params: { capabilities },
      });
    });

    const resultInstance = plainToInstance(BankCardResultEntity, result);

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  async deleteCard(token: string): Promise<BankCardDeleteResultEntity> {
    const result = await this.requestExecutor.run({ scope: 'bank-cards:delete' }, async ({ signal }) => {
      const request = new HttpRequest({ deviceId: await this.deviceService.getDeviceUniqueId(), signal });
      return request.post(this.config.get('GATEWAY_WALLETS_BFF_API') + `/v1/bank-cards/tokens/${token}`, {});
    });

    const resultInstance = plainToInstance(BankCardDeleteResultEntity, result);

    await validateOrReject(resultInstance);

    return resultInstance;
  }
}
