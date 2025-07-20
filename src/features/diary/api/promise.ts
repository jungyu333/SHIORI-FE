import { SHIORI_BE } from '@/shared/api/axios/instance';

export const logout = () => {
  return SHIORI_BE.delete('/user/logout');
};
