import { BindingModuleInterface, type BindingRegistryInterface } from '@sellgar/app';

import { BankCardsGatewayInterface } from './data/gateway/bank-cards-gateway.interface.ts';
import { BankCardsGateway } from './data/gateway/bank-cards.gateway.ts';
import { BankCardsServiceInterface } from './application/bank-cards-service.interface.ts';
import { BankCardsService } from './application/bank-cards.service.ts';

export class BankCardsBinding extends BindingModuleInterface {
  register(registry: BindingRegistryInterface): void {
    registry.bind(BankCardsGatewayInterface).to(BankCardsGateway);
    registry.bind(BankCardsServiceInterface).to(BankCardsService);
  }
}
