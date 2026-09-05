import { OperationEntity } from '@library/domain';

export const operationType = (status: OperationEntity['type']): string => {
  switch (status) {
    case 'PayService':
    case 'MerchantPayment':
      return 'Платеж';
    case 'Deposit':
      return 'Пополнение';
    case 'Withdrawal':
      return 'Перевод';
    default:
      return 'Платеж';
  }
};
