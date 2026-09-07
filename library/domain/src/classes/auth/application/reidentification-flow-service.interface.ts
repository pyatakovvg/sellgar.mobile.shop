import type { PendingIdentificationEntity } from '../domain/pending-identification.entity.ts';

export interface ReidentificationFlowInput {
  readonly identification: PendingIdentificationEntity;
  readonly password: string;
  readonly phone: string;
}

export type ReidentificationFlowContext = Pick<ReidentificationFlowInput, 'identification' | 'phone'>;

export abstract class ReidentificationFlowServiceInterface {
  abstract begin(input: ReidentificationFlowInput): void;
  abstract clear(): void;
  abstract complete(): Promise<void>;
  abstract getPending(): ReidentificationFlowContext | null;
}
