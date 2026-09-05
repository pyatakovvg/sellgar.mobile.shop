export interface CommissionCalculateInput {
  operationType: 'Withdrawal' | 'PayService';
  method: string;
  debitAmount: number | null;
  creditAmount: number | null;
}
