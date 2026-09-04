import type { ControllerArgs } from '@sellgar/app';

export interface BrandsPaginationLoaderData {
  readonly count: number;
}

export abstract class BrandsPaginationControllerInterface {
  abstract action(args: ControllerArgs): Promise<void>;

  abstract loader(): BrandsPaginationLoaderData;
}
