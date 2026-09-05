import { DraftOperationEntity } from '../../operation';
import { DepositDetailsEntity } from '../domain/deposit-details.entity.ts';

import type { DepositCreateInput } from '../data/gateway/input/deposit-create.input.ts';

export abstract class DepositServiceInterface {
  abstract getDetails(method: string): Promise<DepositDetailsEntity>;
  abstract create(dto: DepositCreateInput): Promise<DraftOperationEntity>;
}
