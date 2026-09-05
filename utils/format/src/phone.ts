export const phoneHiddenFormat = (phone: string) => {
  const matches = phone.match(/(7)(\d{3})(\d{3})(\d{2})(\d{2})/i);
  if (!matches) {
    throw Error('Not matches format');
  }
  return `+${matches[1]} ••• ••• •• ${matches[5]}`;
};

export const phoneFormat = (phone: string) => {
  const matches = phone.match(/(7)(\d{3})(\d{3})(\d{2})(\d{2})/i);
  if (!matches) {
    throw Error('Not matches format');
  }
  return `+${matches[1]} (${matches[2]}) ${matches[3]} ${matches[4]} ${matches[5]}`;
};
