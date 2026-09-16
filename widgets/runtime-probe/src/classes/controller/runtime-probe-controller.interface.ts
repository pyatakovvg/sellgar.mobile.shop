import type { ControllerArgs } from '@sellgar/app';

export interface RuntimeProbeData {
  readonly instance: number;
  readonly loads: number;
}

export abstract class RuntimeProbeControllerInterface {
  abstract loader(args: ControllerArgs): RuntimeProbeData;
}
