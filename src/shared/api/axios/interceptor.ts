import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { toCamel, toSnake } from 'snake-camel';
import { BASE_URL } from '@/shared/api/constants/baseURL';

let isRefreshing = false;
let refreshSubscribers: ((token: string) => void)[] = [];

function onTokenRefreshed(token: string) {
  refreshSubscribers.forEach((callback) => callback(token));
  refreshSubscribers = [];
}

function addRefreshSubscriber(callback: (token: string) => void) {
  refreshSubscribers.push(callback);
}

async function refreshAccessToken(): Promise<string | null> {
  try {
    const response = await axios.post(
      `${BASE_URL.shioriBE}/auth/refresh`,
      {
        access_token: localStorage.getItem('access_token'),
      },
      { withCredentials: true } // 쿠키 포함
    );

    const newToken = response.data.data.token;
    localStorage.setItem('access_token', newToken);
    return newToken;
  } catch (error) {
    localStorage.removeItem('access_token');
    window.location.href = '/login';
    return null;
  }
}

function setAuthorizationHeader(config: InternalAxiosRequestConfig, token: string) {
  if (config.headers && typeof (config.headers as any).set === 'function') {
    (config.headers as any).set('Authorization', `Bearer ${token}`);
  } else if (config.headers) {
    config.headers['Authorization'] = `Bearer ${token}`;
  } else {
    (config.headers as Record<string, string>)['Authorization'] = `Bearer ${token}`;
  }
}

export const INTERCEPTORS = {
  request: () => ({
    onFulFilled: (config: InternalAxiosRequestConfig) => {
      if (config.data) config.data = toSnake(config.data);

      const token = localStorage.getItem('access_token');
      if (token) {
        setAuthorizationHeader(config, token);
      }

      return config;
    },
    onRejected: (error: AxiosError) => {
      return Promise.reject(error);
    },
  }),

  response: () => ({
    onFulFilled: (response: AxiosResponse) => {
      if (response.data) response.data = toCamel(response.data);
      return response;
    },

    onRejected: async (error: AxiosError) => {
      const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

      if (
        error.response?.status === 401 &&
        !originalRequest._retry &&
        !originalRequest.url?.includes('/api/auth/refresh')
      ) {
        originalRequest._retry = true;

        if (isRefreshing) {
          return new Promise((resolve) => {
            addRefreshSubscriber((token: string) => {
              setAuthorizationHeader(originalRequest, token);
              resolve(axios(originalRequest));
            });
          });
        }

        isRefreshing = true;
        const newToken = await refreshAccessToken();
        isRefreshing = false;

        if (newToken) {
          onTokenRefreshed(newToken);

          setAuthorizationHeader(originalRequest, newToken);
          return axios(originalRequest);
        }
      }

      return Promise.reject(error);
    },
  }),
};
