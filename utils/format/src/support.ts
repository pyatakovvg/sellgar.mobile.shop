export const getSupportEmailText = (walletNumber: string) => {
  return encodeURIComponent(`Обращение в поддержку по кошельку ${walletNumber}`);
};
