import { Icon, Typography, useTheme } from '@library/kit';

import React from 'react';
import { Text, View } from 'react-native';
import { useFormContext, useWatch } from 'react-hook-form';

import type { PasswordSetFormValues } from '../form/password-set.schema.ts';
import { createStyles } from './default.styles.ts';

export const PasswordChecks: React.FC = () => {
  const { control } = useFormContext<PasswordSetFormValues>();
  const { theme } = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);
  const [password = '', confirmation = ''] = useWatch({
    control,
    name: ['password', 'confirmPassword'],
  });
  const checks = [
    { passed: /[A-Z]/.test(password), text: 'Заглавные латинские буквы (A-Z)' },
    { passed: /\d/.test(password), text: 'Цифры (0-9)' },
    { passed: password.length >= 12, text: 'Не менее 12 символов' },
    { passed: password.length > 0 && password === confirmation, text: 'Пароли совпадают' },
  ];

  return (
    <View style={styles.wrapper}>
      {checks.map((check) => (
        <View key={check.text} style={styles.item}>
          <Icon
            icon={check.passed ? 'check-fill' : 'close-fill'}
            style={[
              styles.icon,
              {
                color: check.passed ? theme.colors.icon.status.success : theme.colors.icon.status.destructive,
              },
            ]}
          />
          <Typography size="caption-m" weight="regular">
            <Text style={styles.itemText}>{check.text}</Text>
          </Typography>
        </View>
      ))}
    </View>
  );
};
