import { Icon, Typography, useTheme } from '@library/kit';

import React from 'react';

import { MasterCardIcon } from './pay-system-icons/master-card.icon.tsx';
import { VisaIcon } from './pay-system-icons/visa.icon.tsx';

import { createStyles } from './default.styles.ts';
import { Text, TouchableOpacity, View } from 'react-native';

type Props = {
  content: string;
  paySystem?: string | null;
  onPress?: () => void;
  onDelete?: () => void;
  withDelete?: boolean;
};

export const CardButton: React.FC<Props> = ({ paySystem, content, onPress, withDelete, onDelete }) => {
  const { theme } = useTheme();
  const baseStyles = React.useMemo(() => createStyles(theme), [theme]);
  const handlePress = () => {
    onPress && onPress();
  };

  const handleDelete = () => {
    onDelete && onDelete();
  };

  return (
    <TouchableOpacity style={baseStyles.wrapper} onPress={handlePress} disabled={!onPress}>
      <View style={baseStyles.cardIconView}>
        <Icon style={baseStyles.cardIcon} icon={'bank-card-line'} />
      </View>
      <View style={baseStyles.text}>
        <Typography size={'body-s'} weight={'medium'}>
          <Text>{content}</Text>
        </Typography>
      </View>
      <View style={baseStyles.tailIconView}>
        {paySystem === 'MASTERCARD' ? (
          <MasterCardIcon style={baseStyles.tailIcon} />
        ) : paySystem === 'VISA' ? (
          <VisaIcon style={baseStyles.tailIcon} />
        ) : null}
      </View>
      {withDelete && (
        <TouchableOpacity style={baseStyles.deleteIconView} onPress={handleDelete}>
          <Icon icon={'delete-bin-2-line'} style={baseStyles.deleteIcon} />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};
