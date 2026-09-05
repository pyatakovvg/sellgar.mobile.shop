import { PermissionsAndroid, Platform } from 'react-native';
import {
  getMessaging,
  getToken,
  onMessage,
  onNotificationOpenedApp,
  requestPermission,
  hasPermission,
  getInitialNotification,
  onTokenRefresh,
  deleteToken,
} from '@react-native-firebase/messaging';
import { Injectable } from '@sellgar/app';

import { PushNotificationPermissionDeniedError } from '../error/push-notification-permission-denied.error.ts';

import { ENotificationAvailableStatus } from './notification-available-status.enum.ts';
import { PushNotificationServiceInterface } from './push-notification-service.interface.ts';

@Injectable()
export class PushNotificationService implements PushNotificationServiceInterface {
  private readonly messagingInstance;
  constructor() {
    this.messagingInstance = getMessaging();
  }

  async requestPermission() {
    if (Platform.OS === 'android') {
      const androidStatus = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
      if (!androidStatus || androidStatus !== 'granted') {
        throw new PushNotificationPermissionDeniedError();
      }
    }
    const status = await requestPermission(this.messagingInstance);
    return status as unknown as ENotificationAvailableStatus;
  }

  async getPermissionStatus() {
    const status = await hasPermission(this.messagingInstance);
    return status as unknown as ENotificationAvailableStatus;
  }

  async getToken() {
    return await getToken(this.messagingInstance);
  }

  onMessage(callback: (message: any) => void): () => void {
    // Для foreground уведомлений
    const unsubscribe = onMessage(this.messagingInstance, async (remoteMessage) => {
      console.log('Foreground message received:', remoteMessage);
      callback(remoteMessage);
    });

    // Приложение открыто по клику на уведомление
    onNotificationOpenedApp(this.messagingInstance, (remoteMessage) => {
      console.log('App opened from notification:', remoteMessage);
      callback(remoteMessage);
    });

    // Приложение закрыто
    getInitialNotification(this.messagingInstance).then((remoteMessage) => {
      if (remoteMessage) {
        console.log('App opened from quit state:', remoteMessage);
        callback(remoteMessage);
      }
    });

    return unsubscribe;
  }

  async refreshToken() {
    onTokenRefresh(this.messagingInstance, async (newToken) => {
      console.log('Token refreshed:', newToken);
    });
  }

  async unregister() {
    try {
      await deleteToken(this.messagingInstance);
      console.log('FCM token deleted');
    } catch (error) {
      console.error('Error unregistering push notifications:', error);
    }
  }
}
