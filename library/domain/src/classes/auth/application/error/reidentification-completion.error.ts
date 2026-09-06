import { Exception } from '@sellgar/app';

export type ReidentificationCompletionPhase = 'sign-in' | 'status';

export class ReidentificationCompletionError extends Exception {
  constructor(
    readonly phase: ReidentificationCompletionPhase,
    options?: ErrorOptions,
  ) {
    super(`Re-identification failed during the ${phase} phase.`, options);
  }
}
