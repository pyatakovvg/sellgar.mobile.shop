import { sha256 as sha256Lib } from 'react-native-sha256';

export const sha256 = async (value: string): Promise<string> => {
  return await sha256Lib(value);
};
