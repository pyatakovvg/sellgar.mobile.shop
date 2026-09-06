import { useController, useLoaderData, useSubmit } from '@sellgar/app/native';

import React from 'react';
import type { WebViewNavigation } from 'react-native-webview';
import { WebView } from 'react-native-webview';

import { ReidentificationControllerInterface } from '../classes/controller/reidentification-controller.interface.ts';
import { styles } from './styles.ts';

export const ReidentificationView: React.FC = () => {
  const controller = useController(ReidentificationControllerInterface);
  const data = useLoaderData(ReidentificationControllerInterface);
  const submit = useSubmit(ReidentificationControllerInterface);
  const completedRef = React.useRef(false);

  React.useEffect(() => () => controller.cancel(), [controller]);

  const handleNavigationChange = (event: WebViewNavigation): void => {
    if (completedRef.current) {
      return;
    }

    if (event.url.includes(data.successUrlPart)) {
      completedRef.current = true;
      void submit('success');
      return;
    }

    if (event.url.includes(data.failureUrlPart)) {
      completedRef.current = true;
      void submit('failure');
    }
  };

  return (
    <WebView
      mediaCapturePermissionGrantType="grant"
      mediaPlaybackRequiresUserAction
      onNavigationStateChange={handleNavigationChange}
      originWhitelist={['*']}
      source={data.source}
      style={styles.content}
    />
  );
};
