import { Inject, Injectable } from '@sellgar/app';

import { BankCardsServiceInterface } from './bank-cards-service.interface.ts';

import { BankCardsGatewayInterface } from '../data/gateway/bank-cards-gateway.interface.ts';

import { BinCheckResultEntity } from '../domain/bin-check-result.entity.ts';
import { BankCardResultEntity } from '../domain/bank-card-result.entity.ts';
import { TBankCardCapabilities } from '../domain/bank-card-capabilities.type.ts';
import { BankCardDeleteResultEntity } from '../domain/bank-card-delete.entity.ts';

@Injectable()
export class BankCardsService implements BankCardsServiceInterface {
  constructor(@Inject(BankCardsGatewayInterface) private readonly bankCardsGateway: BankCardsGatewayInterface) {}

  async verify(bin: string): Promise<BinCheckResultEntity> {
    return await this.bankCardsGateway.verify(bin);
  }

  async getCards(capabilities?: TBankCardCapabilities): Promise<BankCardResultEntity> {
    return await this.bankCardsGateway.getCards(capabilities);
  }

  async deleteCard(token: string): Promise<BankCardDeleteResultEntity> {
    return await this.bankCardsGateway.deleteCard(token);
  }
}
