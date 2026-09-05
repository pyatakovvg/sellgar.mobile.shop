import type { OperationParamsInput } from '../data/gateway/input/operation-params.input.ts';

import { OperationByUuidResultEntity } from '../domain/operation-by-uuid-result.entity.ts';
import { OperationResultEntity } from '../domain/operation-result.entity.ts';

export abstract class OperationServiceInterface {
  abstract getByUuid(uuid: string): Promise<OperationByUuidResultEntity>;
  abstract waitForFinalStatus(uuid: string, count: number): Promise<OperationByUuidResultEntity>;
  abstract getAll(params: OperationParamsInput): Promise<OperationResultEntity>;
}
