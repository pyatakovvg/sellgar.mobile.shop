import { PayCategoryResultEntity } from '../../domain/pay-category-result.entity.ts';

export abstract class PayCategoryGatewayInterface {
  abstract getAll(): Promise<PayCategoryResultEntity>;
}
