export type TReidentificationCompletionPhase = 'status' | 'login';

export class ReidentificationCompletionError extends Error {
  constructor(
    readonly phase: TReidentificationCompletionPhase,
    readonly originalError?: unknown,
  ) {
    super(`Reidentification ${phase} phase failed`);
    this.name = 'ReidentificationCompletionError';
  }
}
