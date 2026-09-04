import { AppRegistry } from 'react-native';

import { createNativeLinkingTransport, createNativeRouterBridge } from '@sellgar/app/native';

import { deepLinkScheme, name as appName } from '../host.config.json';
import { MobileApplication } from './application';

const app = new MobileApplication({
  routerBridge: createNativeRouterBridge({
    transport: createNativeLinkingTransport({ prefixes: [`${deepLinkScheme}://`] }),
  }),
});

app.compose();

const AppView = app.createView();

AppRegistry.registerComponent(appName, () => AppView);

app.initialize().catch((e) => {
  console.error('App init error:', e);
});

declare const module: {
  readonly hot?: {
    dispose(callback: () => void): void;
  };
};

if (module.hot) {
  module.hot.dispose(() => {
    void app.dispose();
  });
}
