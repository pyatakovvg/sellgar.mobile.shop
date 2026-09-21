import {
  BadRequestException,
  Inject,
  Injectable,
  RequestExecutorInterface,
  type RequestExecutionOptions,
  type RequestInterceptorContext,
  type RequestOperation,
} from '@sellgar/app';

import { AuthServiceInterface } from '../../../classes/auth';
import { SessionRestoreUsecaseInterface } from '../../../classes/session';
import { RequestExecutorDelegateInterface } from './request-executor-delegate.interface.ts';

@Injectable()
export class RequestExecutorDelegate implements RequestExecutorDelegateInterface {
  constructor(
    @Inject(RequestExecutorInterface) private readonly executor: RequestExecutorInterface,
    @Inject(AuthServiceInterface) private readonly authService: AuthServiceInterface,
    @Inject(SessionRestoreUsecaseInterface) private readonly restoreSession: SessionRestoreUsecaseInterface,
  ) {}

  run<T>(operation: RequestOperation<T>): Promise<T>;
  run<T>(options: RequestExecutionOptions, operation: RequestOperation<T>): Promise<T>;
  run<T>(...args: [RequestOperation<T>] | [RequestExecutionOptions, RequestOperation<T>]): Promise<T> {
    const request = this.executor.request.use(this.prepareRequest.bind(this));

    return args.length === 1 ? request.run(args[0]) : request.run(args[0], args[1]);
  }

  private async prepareRequest(config: RequestInterceptorContext): Promise<RequestInterceptorContext> {
    if (!this.authService.isAccessTokenExpired()) return config;

    try {
      await this.authService.refreshStoredCredentials();
    } catch (error) {
      if (config.signal.aborted) throw error;

      if (error instanceof BadRequestException) {
        await this.restoreSession.execute();
      }
      // Legacy contract: other refresh failures allow the original request with the existing token.
      // Restore failures propagate; the request must not run when restoration fails.
    }
    return config;
  }
}
