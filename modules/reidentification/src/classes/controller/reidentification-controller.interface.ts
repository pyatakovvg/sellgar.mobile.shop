import type { ControllerArgs, WithPayload } from '@sellgar/app';

export interface ReidentificationLoaderData {
  readonly failureUrlPart: string;
  readonly source: { readonly uri: string };
  readonly successUrlPart: string;
}

export type ReidentificationResult = 'failure' | 'success';

export abstract class ReidentificationControllerInterface {
  abstract action(args: ControllerArgs<WithPayload<ReidentificationResult>>): Promise<void>;
  abstract cancel(): void;
  abstract loader(args: ControllerArgs): Promise<ReidentificationLoaderData>;
}
