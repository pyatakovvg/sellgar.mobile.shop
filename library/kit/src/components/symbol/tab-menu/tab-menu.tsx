import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { Tab, type IProps as ITabProps } from './tab';
import { context, Provider } from './tab.context.ts';

import { useTheme } from '../../../theme';

import { createShapeStyle } from './styles/shape/shape.style.ts';
import { createTypeStyle } from './styles/type/type.style.ts';
import { createStyles } from './default.style.ts';

const Menu: React.FC<React.PropsWithChildren> = (props) => {
  const { type, size, shape = 'rounded', setActiveTabName, activeTabName } = React.useContext(context);
  const { theme } = useTheme();
  const baseStyles = createStyles();
  const typeStyles = React.useMemo(() => createTypeStyle(theme, type), [theme, type]);
  const shapeStyles = React.useMemo(() => createShapeStyle(shape, type), [shape, type]);

  const handlePress = (tabName: string) => {
    setActiveTabName && setActiveTabName(tabName);
  };

  const menuStyles = React.useMemo(() => {
    return StyleSheet.flatten([baseStyles.menu, shapeStyles.menu, typeStyles.menu]);
  }, [type, shape, typeStyles, shapeStyles]);

  return (
    <View style={menuStyles}>
      {React.Children.map(props.children, (child, i) => {
        if (React.isValidElement(child)) {
          const childElement = child as React.ReactElement<ITabProps>;
          return (
            <Pressable
              style={[baseStyles.tab, i ? typeStyles.tab : {}]}
              onPress={() => handlePress(childElement.props.name as string)}
            >
              {React.cloneElement(childElement, {
                size,
                type,
                shape,
                style: type === 'fill' ? 'secondary' : 'primary',
                isActive: activeTabName === childElement.props.name,
              })}
            </Pressable>
          );
        }
        return child;
      })}
    </View>
  );
};

interface IContentProps {
  name: string;
}

const Content: React.FC<React.PropsWithChildren<IContentProps>> = (props) => {
  const { activeTabName } = React.useContext(context);

  if (activeTabName !== props.name) {
    return null;
  }

  return props.children;
};

interface IProps {
  size?: 'lg' | 'md' | 'sm';
  shape?: 'rounded' | 'pill';
  type?: 'fill' | 'line' | 'segmented';
  defaultTabName?: string;
}

const TabMenuComponent: React.FC<React.PropsWithChildren<IProps>> = (props) => {
  const [activeTabName, setActiveTabName] = React.useState(props.defaultTabName);
  return (
    <Provider
      value={{
        size: props.size ?? 'lg',
        type: props.type ?? 'fill',
        shape: props.shape ?? 'rounded',
        activeTabName,
        setActiveTabName: (tabName) => setActiveTabName(tabName),
        onPress() {},
      }}
    >
      {props.children}
    </Provider>
  );
};

type TTabMenu = typeof TabMenuComponent & {
  Menu: typeof Menu & {
    Tab: typeof Tab;
  };
  Content: typeof Content;
};

export const TabMenu: TTabMenu = Object.assign(TabMenuComponent, {
  Menu: Object.assign(Menu, {
    Tab,
  }),
  Content,
});
