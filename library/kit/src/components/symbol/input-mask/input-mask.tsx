import React from 'react';
import { TextInput } from 'react-native';
import { MaskedTextInput, MaskedTextInputProps } from 'react-native-mask-text';

import { IInputProps, Input } from '../input';

type TMaskProps = Pick<MaskedTextInputProps, 'mask' | 'options'>;

export interface IProps extends Omit<IInputProps, 'onChangeText' | 'renderTextInput'>, TMaskProps {
  onChangeText: (maskedText: string, unmaskedText: string) => void;
  maskType?: Pick<MaskedTextInputProps, 'type'>;
}

export const InputMask = React.forwardRef<TextInput, IProps>(
  ({ mask, maskType, options, onChangeText, ...props }, ref) => {
    return (
      <Input
        ref={ref}
        {...props}
        renderTextInput={(inputProps) => (
          <MaskedTextInput {...inputProps} mask={mask} type={maskType} options={options} onChangeText={onChangeText} />
        )}
      />
    );
  },
);
