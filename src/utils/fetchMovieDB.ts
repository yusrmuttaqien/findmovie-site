import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export enum FetchMovieDBMethod {
  GET = 'get',
}

export default function fetchMovieDB(
  method: FetchMovieDBMethod,
  url: string,
  config?: AxiosRequestConfig | null,
  callback?: (res: AxiosResponse) => object
) {
  return axios[method](`${import.meta.env.VITE_MOVIEDB_BASE_API}${url}`, {
    ...config,
    params: { api_key: import.meta.env.VITE_MOVIEDB_API_KEY },
  }).then((res: AxiosResponse) => (callback ? callback(res) : res.data));
}
