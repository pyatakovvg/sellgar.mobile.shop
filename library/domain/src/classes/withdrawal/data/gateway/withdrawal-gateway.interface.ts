import type { WithdrawalInput } from './input/withdrawal.input.ts';
import { VerifyBankcardResultEntity } from '../../domain/verify-bankcard-result.entity.ts';

import { DraftOperationResultEntity } from '../../../operation';

export abstract class WithdrawalGatewayInterface {
  abstract confirmWithdrawalBankCard(operationUuid: string, code: string): Promise<DraftOperationResultEntity>;
  abstract withdrawalToBankCard(dto: WithdrawalInput): Promise<DraftOperationResultEntity>;
  abstract verifyBankCard(bin: string): Promise<VerifyBankcardResultEntity>;
}
