import { LimitEntity } from './limit.entity.ts';
import { OperationLimitsEntity } from './operation-limits.entity.ts';

export type OperationLimitsAvailableEntity = OperationLimitsEntity & {
  isAllowed: true;
  allowedAmount: LimitEntity;
};
