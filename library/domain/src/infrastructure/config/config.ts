import { Inject, Injectable } from '@sellgar/app';

import { ConfigInterface } from './config.interface.ts';
import { type ConfigKey } from './config-key.type.ts';
import { type ConfigMap } from './config-map.type.ts';
import { getConfigMap } from './config.store.ts';
import { StorageServiceInterface } from '../storage';

const demoConfigKeys: Partial<Record<ConfigKey, ConfigKey>> = {
  GATEWAY_WALLETS_BFF_API: 'GATEWAY_WALLETS_BFF_API_DEMO',
  GATEWAY_HOST_API: 'GATEWAY_HOST_API_DEMO',
};

@Injectable()
export class Config implements ConfigInterface {
  constructor(
    @Inject(StorageServiceInterface)
    private readonly storageService: StorageServiceInterface,
  ) {}

  private checkDemoMode(): boolean {
    const isDemo = this.storageService.getItem('isDemo');
    return !!isDemo;
  }

  get<K extends ConfigKey>(key: K): ConfigMap[K] {
    const envObject = getConfigMap();

    if (this.checkDemoMode()) {
      const demoKey = demoConfigKeys[key];

      if (demoKey) {
        return envObject[demoKey];
      }
    }

    return envObject[key];
  }
}
