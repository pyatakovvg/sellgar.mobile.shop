import { BadRequestException } from '@sellgar/app';

export type AuthAccessRestriction = 'permanent' | 'temporary';

export const getAuthAccessRestriction = (error: unknown): AuthAccessRestriction | null => {
  if (!(error instanceof BadRequestException) || typeof error.response !== 'object' || error.response === null) {
    return null;
  }

  const payload = Reflect.get(error.response, 'error');
  const code = typeof payload === 'object' && payload !== null ? String(Reflect.get(payload, 'code')) : null;

  if (code === '207') {
    return 'temporary';
  }

  if (code === '206' || code === '216') {
    return 'permanent';
  }

  return null;
};
