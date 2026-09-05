import { type PendingIdentificationEntity } from '@library/domain';

export type TReidentificationPhase = 'idle' | 'confirmation' | 'webview' | 'completing';

export abstract class SignInStoreInterface {
  abstract inProcess: boolean;
  abstract requestUuid: string;
  abstract pendingIdentification: PendingIdentificationEntity | null;
  abstract reidentificationPhase: TReidentificationPhase;

  abstract setProcess(state: boolean): void;
  abstract generateRequestUuid(): void;
  abstract startReidentification(identification: PendingIdentificationEntity): void;
  abstract setReidentificationPhase(phase: TReidentificationPhase): void;
  abstract clearReidentification(): void;
}
