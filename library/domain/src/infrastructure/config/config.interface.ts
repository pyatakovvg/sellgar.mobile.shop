import { ConfigKey } from './config-key.type.ts';
import { ConfigMap } from './config-map.type.ts';

export abstract class ConfigInterface {
  abstract get<K extends ConfigKey>(key: K): ConfigMap[K];
}
