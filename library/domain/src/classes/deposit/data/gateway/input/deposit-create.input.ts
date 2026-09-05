import { CardDetailsEntity } from '../../../domain/card-details.entity.ts';

export interface DepositCreateInput {
  method: string;
  amount: number;
  cardDetails?: CardDetailsEntity;
  paymentToken?: string;
}
