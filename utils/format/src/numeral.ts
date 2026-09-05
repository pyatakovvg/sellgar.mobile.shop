import { NumericFormatProps, numericFormatter } from 'react-number-format';

const defaultFormatOptions: NumericFormatProps = {
  displayType: 'text',
  thousandSeparator: ' ',
};

interface IUnFormatNumeralOptions {
  decimalScale?: number;
}

export const formatNumeral = (value: number | bigint | string, options?: NumericFormatProps) =>
  numericFormatter(String(value), options || defaultFormatOptions);

export const unFormatNumeral = (value: string, options?: IUnFormatNumeralOptions) => {
  const normalizedValue = value.replace(/\s/g, '').replace(/,/g, '.');

  if (options?.decimalScale === undefined) {
    return normalizedValue;
  }

  const [integerPart, ...fractionParts] = normalizedValue.split('.');

  if (!fractionParts.length) {
    return normalizedValue;
  }

  return `${integerPart}.${fractionParts.join('').slice(0, options.decimalScale)}`;
};
