import { HttpService } from '@nestjs/axios';
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { firstValueFrom } from 'rxjs';

export abstract class HttpClientService {
  protected readonly client: AxiosInstance;

  constructor(
    protected readonly httpService: HttpService,
    requestInterceptors: Array<
      (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig>
    > = [],
    responseInterceptors: Array<(response: AxiosResponse) => AxiosResponse | Promise<AxiosResponse>> = [],
    errorInterceptors: Array<(error: any) => any> = []
  ) {
    this.client = httpService.axiosRef;

    requestInterceptors.forEach((interceptor) => this.client.interceptors.request.use(interceptor));
    responseInterceptors.forEach((interceptor) => this.client.interceptors.response.use(interceptor));
    errorInterceptors.forEach((interceptor) => this.client.interceptors.response.use(undefined, interceptor));
  }

  async get<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return firstValueFrom(this.httpService.get<T>(url, config));
  }

  async post<T = any>(url: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return firstValueFrom(this.httpService.post<T>(url, data, config));
  }

  async put<T = any>(url: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return firstValueFrom(this.httpService.put<T>(url, data, config));
  }

  async patch<T = any>(url: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return firstValueFrom(this.httpService.patch<T>(url, data, config));
  }

  async delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return firstValueFrom(this.httpService.delete<T>(url, config));
  }

  async head<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return firstValueFrom(this.httpService.head<T>(url, config));
  }
}
