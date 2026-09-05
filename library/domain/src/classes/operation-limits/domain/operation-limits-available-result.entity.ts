import { OperationLimitsResultEntity } from './operation-limits-result.entity.ts';
import { OperationLimitsAvailableEntity } from './operation-limits-available.entity.ts';

export type OperationLimitsAvailableResultEntity = OperationLimitsResultEntity & {
  success: true;
  data: OperationLimitsAvailableEntity;
};
