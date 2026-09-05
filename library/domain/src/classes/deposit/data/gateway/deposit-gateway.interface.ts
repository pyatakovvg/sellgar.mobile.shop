import { DepositDetailsResultEntity } from '../../domain/deposit-details-result.entity.ts';

import type { DepositCreateInput } from './input/deposit-create.input.ts';

import { DraftOperationResultEntity } from '../../../operation';

export abstract class DepositGatewayInterface {
  abstract getDetails(method: string): Promise<DepositDetailsResultEntity>;
  abstract create(dto: DepositCreateInput): Promise<DraftOperationResultEntity>;
}
