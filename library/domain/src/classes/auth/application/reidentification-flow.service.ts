import { Inject, Injectable } from '@sellgar/app';

import { AuthServiceInterface } from './auth-service.interface.ts';
import { ReidentificationCompletionError } from './error/reidentification-completion.error.ts';
import {
  ReidentificationFlowServiceInterface,
  type ReidentificationFlowContext,
  type ReidentificationFlowInput,
} from './reidentification-flow-service.interface.ts';

@Injectable()
export class ReidentificationFlowService extends ReidentificationFlowServiceInterface {
  private flow: ReidentificationFlowInput | null = null;

  constructor(
    @Inject(AuthServiceInterface)
    private readonly authService: AuthServiceInterface,
  ) {
    super();
  }

  begin(input: ReidentificationFlowInput): void {
    this.flow = input;
  }

  clear(): void {
    this.flow = null;
  }

  async complete(): Promise<void> {
    const flow = this.flow;

    if (!flow) {
      throw new ReidentificationCompletionError('status');
    }

    try {
      const status = await this.authService.waitReidentificationFinalStatus(flow.identification.requestUuid);

      if (status.status !== 'Success') {
        throw new ReidentificationCompletionError('status');
      }
    } catch (error) {
      this.clear();

      if (error instanceof ReidentificationCompletionError) {
        throw error;
      }

      throw new ReidentificationCompletionError('status', { cause: error });
    }

    try {
      const result = await this.authService.signInByCredentials(flow.phone, flow.password);

      if (result.nextAction !== 'Tokens') {
        throw new ReidentificationCompletionError('sign-in');
      }

      this.clear();
    } catch (error) {
      this.clear();

      if (error instanceof ReidentificationCompletionError) {
        throw error;
      }

      throw new ReidentificationCompletionError('sign-in', { cause: error });
    }
  }

  getPending(): ReidentificationFlowContext | null {
    const flow = this.flow;

    return flow ? { identification: flow.identification, phone: flow.phone } : null;
  }
}
