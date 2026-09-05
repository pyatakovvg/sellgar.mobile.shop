import { Exception } from '@sellgar/app';

import { ConfigMap } from './config-map.type.ts';

let configMap: ConfigMap | null = null;

export const configureConfig = (values: ConfigMap) => {
  configMap = values;
};

export const getConfigMap = (): ConfigMap => {
  if (!configMap) {
    throw new Exception('Config is not configured');
  }

  return configMap;
};
