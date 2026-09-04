import type { ControllerArgs } from '@sellgar/app';

export interface BrandsLoaderData {
  readonly duration: number;
  readonly instance: number;
  readonly loads: number;
}

export abstract class BrandsControllerInterface {
  abstract loader(args: ControllerArgs): Promise<BrandsLoaderData>;
}
