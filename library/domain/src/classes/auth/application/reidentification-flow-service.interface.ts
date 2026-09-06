import type { PendingIdentificationEntity } from '../domain/pending-identification.entity.ts';

export interface ReidentificationFlowInput {
  readonly identification: PendingIdentificationEntity;
  readonly password: string;
  readonly phone: string;
}

export abstract class ReidentificationFlowServiceInterface {
  abstract begin(input: ReidentificationFlowInput): void;
  abstract clear(): void;
  abstract complete(): Promise<void>;
  abstract getPendingIdentification(): PendingIdentificationEntity | null;
}
