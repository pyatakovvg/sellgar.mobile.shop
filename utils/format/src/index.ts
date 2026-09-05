import numeral from 'numeral';

numeral.register('locale', 'ru', {
  delimiters: {
    thousands: ' ',
    decimal: ',',
  },
  abbreviations: {
    thousand: 'тыс',
    million: 'млн',
    billion: 'м',
    trillion: 'тр',
  },
  ordinal: function (number) {
    return number === 1 ? 'er' : 'ème';
  },
  currency: {
    symbol: 'Р',
  },
});

numeral.locale('ru');

export { amountFormat, amountUnFormat } from './amount.ts';
export { formatNumeral, unFormatNumeral } from './numeral.ts';

export { dateFormat } from './date.ts';
export { dateLocaleFormat } from './date-locale.ts';
export { timeFormat } from './time.ts';

export { phoneHiddenFormat, phoneFormat } from './phone.ts';
export { bankcardHiddenFormat, toHumanMaskedCardNumber } from './bankcard.ts';

export { getSupportEmailText } from './support.ts';

export { operationType } from './operation-type.ts';
export { operationStatus } from './operation-status.ts';
