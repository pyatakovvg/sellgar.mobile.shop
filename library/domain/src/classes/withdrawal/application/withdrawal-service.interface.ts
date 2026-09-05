import type { WithdrawalInput } from '../data/gateway/input/withdrawal.input.ts';
import { VerifyBankcardResultEntity } from '../domain/verify-bankcard-result.entity.ts';
import { DraftOperationResultEntity } from '../../operation';

export abstract class WithdrawalServiceInterface {
  abstract confirmWithdrawalBankCard(operationUuid: string, code: string): Promise<DraftOperationResultEntity>;
  abstract withdrawalToBankCard(values: WithdrawalInput): Promise<DraftOperationResultEntity>;
  abstract verifyBankCard(bin: string): Promise<VerifyBankcardResultEntity>;
}
