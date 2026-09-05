import { BalanceResultEntity } from '../../domain/balance-result.entity.ts';

export abstract class BalanceGatewayInterface {
  abstract getAll(): Promise<BalanceResultEntity>;
}
