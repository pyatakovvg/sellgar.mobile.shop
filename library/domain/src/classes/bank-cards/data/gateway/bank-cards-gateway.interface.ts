import { BinCheckResultEntity } from '../../domain/bin-check-result.entity.ts';
import { BankCardResultEntity } from '../../domain/bank-card-result.entity.ts';
import { TBankCardCapabilities } from '../../domain/bank-card-capabilities.type.ts';
import { BankCardDeleteResultEntity } from '../../domain/bank-card-delete.entity.ts';

export abstract class BankCardsGatewayInterface {
  abstract verify(bin: string): Promise<BinCheckResultEntity>;
  abstract getCards(capabilities?: TBankCardCapabilities): Promise<BankCardResultEntity>;
  abstract deleteCard(token: string): Promise<BankCardDeleteResultEntity>;
}
