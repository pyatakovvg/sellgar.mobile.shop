import { v4 as uuidV4 } from 'uuid';

export const uuid = (version: string = '4'): string => {
  switch (version) {
    default:
      return uuidV4();
  }
};
