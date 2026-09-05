export const bankcardHiddenFormat = (phone: string) => {
  const matches = phone.match(/(\d{4})(\d{4})(\d{4})(\d{4})/i);
  if (!matches) {
    throw Error('Not matches format');
  }
  return `•••• ${matches[4]}`;
};

export const toHumanMaskedCardNumber = (maskedCard: string) => {
  return `•••• ${maskedCard.slice(-4)}`;
};
