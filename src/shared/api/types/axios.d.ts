import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

interface ApiResponse<T> {
  code: number;
  message: string | null;
  data: T;
}

export interface GenericInstance extends AxiosInstance {
  get<RES>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<ApiResponse<RES>>>;

  post<REQ, RES = void>(url: string, data?: REQ, config?: AxiosRequestConfig): Promise<AxiosResponse<ApiResponse<RES>>>;

  put<REQ, RES>(url: string, data: REQ, config?: AxiosRequestConfig): Promise<AxiosResponse<ApiResponse<RES>>>;

  patch<REQ, RES>(url: string, data?: REQ, config?: AxiosRequestConfig): Promise<AxiosResponse<ApiResponse<RES>>>;

  delete<RES>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<ApiResponse<RES>>>;
}

declare module 'axios' {
  export interface AxiosRequestConfig {
    skipSnakeToCamel?: boolean;
  }
}
