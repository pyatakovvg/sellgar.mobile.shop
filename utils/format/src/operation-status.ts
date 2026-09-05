export const operationStatus = (
  status: 'Processing' | 'Pending' | 'Failed' | 'Succeeded' | 'ProviderAccepted',
): string => {
  switch (status) {
    case 'Succeeded':
      return 'Успех';
    case 'Failed':
      return 'Не выполнена';
    default:
      return 'В обработке';
  }
};
