import axios from 'axios';
import { BASE_URL } from '@/shared/api/constants/baseURL';
import { GenericInstance } from '@/shared/api/types/axios';
import { INTERCEPTORS } from '@/shared/api/axios/interceptor';

export const SHIORI_BE: GenericInstance = axios.create({
  baseURL: BASE_URL.shioriBE,
  timeout: 30000,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
});

SHIORI_BE.interceptors.request.use(INTERCEPTORS.request().onFulFilled, INTERCEPTORS.request().onRejected);

SHIORI_BE.interceptors.response.use(INTERCEPTORS.response().onFulFilled, INTERCEPTORS.response().onRejected);
