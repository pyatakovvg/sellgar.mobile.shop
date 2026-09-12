import { BrandsRoute, ProductsRoute } from '@library/route-tokens';
import type { NavigationRequestFactory } from '@sellgar/app';
import { TabItem, type LayoutViewProps, useSafeAreaInsets, WidgetHost } from '@sellgar/app/native';
import { SignOutWidget } from '@widget/sign-out';
import { useTheme, type TTheme } from '@library/kit';

import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export const LayoutView: React.FC<LayoutViewProps> = (props) => {
  const { theme } = useTheme();

  const styles = createStyles(theme);

  return (
    <View style={styles.root}>
      <View style={styles.content}>{props.children}</View>
      <View style={styles.tabs}>
        <NavigationTab caption="Products" navigation={(navigate) => navigate.to(ProductsRoute)} />
        <NavigationTab caption="Brands" navigation={(navigate) => navigate.to(BrandsRoute)} />
        <WidgetHost token={SignOutWidget} />
      </View>
    </View>
  );
};

interface NavigationTabProps {
  readonly caption: string;
  readonly navigation: NavigationRequestFactory;
}

const NavigationTab: React.FC<NavigationTabProps> = (props) => {
  const { theme } = useTheme();
  const safeAreaInsets = useSafeAreaInsets();

  const styles = createStyles(theme);

  return (
    <TabItem navigation={props.navigation}>
      {({ isActive, isPending, tab }) => (
        <Pressable
          {...tab}
          style={({ pressed }) => [
            styles.tab,
            { paddingBottom: safeAreaInsets.bottom },
            isActive && styles.tabActive,
            pressed && styles.pressed,
          ]}
        >
          <Text style={[styles.tabLabel, isActive && styles.tabLabelActive]}>{isPending ? '…' : props.caption}</Text>
        </Pressable>
      )}
    </TabItem>
  );
};

const createStyles = (theme: TTheme) =>
  StyleSheet.create({
    content: { flex: 1 },
    pressed: { opacity: 0.72 },
    root: { flex: 1 },
    tab: { alignItems: 'center', flex: 1, justifyContent: 'center', minHeight: 58 },
    tabActive: { backgroundColor: theme.colors.background.button.primary_hover },
    tabLabel: { color: theme.colors.text.base.primary, fontSize: 13, fontWeight: '600' },
    tabLabelActive: { color: theme.colors.text.base.primary },
    tabs: { backgroundColor: theme.colors.background.button.primary, flexDirection: 'row', minHeight: 58 },
  });
