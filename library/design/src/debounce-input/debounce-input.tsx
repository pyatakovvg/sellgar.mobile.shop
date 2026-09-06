import { debounce } from '@utils/funcs';
import { type IInputProps, Input } from '@library/kit';
import { formatNumeral, unFormatNumeral } from '@utils/format';

import React from 'react';

interface IProps extends Omit<IInputProps, 'onChangeText'> {
  onChangeText(value: string): void;
  delay?: number;
  decimalScale?: number;
}

export const DebounceInput: React.FC<IProps> = ({ delay = 1000, decimalScale = 2, ...props }) => {
  const [inputValue, setInputValue] = React.useState<string>(() =>
    props.value ? props.value : props.defaultValue ? String(props.defaultValue) : '',
  );
  const [debouncedValue, setDebouncedValue] = React.useState<string>(inputValue);

  React.useEffect(() => {
    if (props.value) {
      setInputValue(String(props.value));
    }
  }, [props.value]);

  React.useEffect(() => {
    const handler = debounce((value) => {
      setDebouncedValue(String(value));
    }, delay);

    handler(inputValue);

    return () => {
      handler.cancel();
    };
  }, [inputValue]);

  React.useEffect(() => {
    props.onChangeText && props.onChangeText(debouncedValue);
  }, [debouncedValue]);

  const handleChange = (value: string) => {
    setInputValue(unFormatNumeral(value, { decimalScale }));
  };

  return <Input {...props} value={formatNumeral(inputValue)} onChangeText={handleChange} />;
};
