import { PayCategoryResultEntity } from '../domain/pay-category-result.entity.ts';

export abstract class PayCategoryServiceInterface {
  abstract getAll(): Promise<PayCategoryResultEntity>;
}
