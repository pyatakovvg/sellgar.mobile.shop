import { BalanceResultEntity } from '../domain/balance-result.entity.ts';

export abstract class BalanceServiceInterface {
  abstract getAll(): Promise<BalanceResultEntity>;
}
