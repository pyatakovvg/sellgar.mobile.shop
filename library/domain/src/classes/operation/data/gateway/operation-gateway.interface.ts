import type { OperationParamsInput } from './input/operation-params.input.ts';

import { OperationByUuidResultEntity } from '../../domain/operation-by-uuid-result.entity.ts';
import { OperationResultEntity } from '../../domain/operation-result.entity.ts';

export abstract class OperationGatewayInterface {
  abstract getByUuid(uuid: string): Promise<OperationByUuidResultEntity>;
  abstract getAll(params: OperationParamsInput): Promise<OperationResultEntity>;
}
