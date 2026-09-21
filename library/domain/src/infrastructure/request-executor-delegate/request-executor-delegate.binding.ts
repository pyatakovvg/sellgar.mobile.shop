import { BindingModuleInterface, type BindingRegistryInterface } from '@sellgar/app';

import { RequestExecutorDelegateInterface } from './delegate/request-executor-delegate.interface.ts';
import { RequestExecutorDelegate } from './delegate/request-executor.delegate.ts';

export class RequestExecutorDelegateBinding extends BindingModuleInterface {
  register(registry: BindingRegistryInterface): void {
    registry.bind(RequestExecutorDelegateInterface).to(RequestExecutorDelegate);
  }
}
