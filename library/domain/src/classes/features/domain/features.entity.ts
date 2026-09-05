import { IsArray } from 'class-validator';

export const DEPOSIT_BY_CARD_FEATURE = 'BankCardDepositByCardDetails';
export const WITHDRAWAL_BY_CARD_FEATURE = 'BankCardWithdrawalByCardDetails';

export class FeaturesEntity {
  @IsArray()
  features: string[];
}
