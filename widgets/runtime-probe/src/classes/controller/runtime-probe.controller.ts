import { Controller } from '@sellgar/app';

import { RuntimeProbeControllerInterface, type RuntimeProbeData } from './runtime-probe-controller.interface.ts';

@Controller()
export class RuntimeProbeController extends RuntimeProbeControllerInterface {
  private static nextInstance = 0;

  private readonly instance = ++RuntimeProbeController.nextInstance;
  private loads = 0;

  loader(): RuntimeProbeData {
    return { instance: this.instance, loads: ++this.loads };
  }
}
