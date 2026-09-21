import type { RequestExecutionOptions, RequestOperation } from '@sellgar/app';

export abstract class RequestExecutorDelegateInterface {
  abstract run<T>(operation: RequestOperation<T>): Promise<T>;
  abstract run<T>(options: RequestExecutionOptions, operation: RequestOperation<T>): Promise<T>;
}
