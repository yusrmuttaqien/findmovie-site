import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

enum Method {
  GET = 'get',
}

type ExpectedData = {
  id: number;
  title: string;
  backdrop_path: string;
  overview: string;
  original_language: string;
  original_title: string;
  release_date: string;
  name: string;
  original_name: string;
  first_air_date: string;
  media_type?: 'movie' | 'tv' | 'person';
};

export type BasicMetadata = {
  id: number;
  title: string;
  backdrop: string;
  overview: string;
  lang: string;
  date: string;
};

function fetchMDB(method: Method, url: string, config?: AxiosRequestConfig | null) {
  return axios[method](`${import.meta.env.VITE_MOVIEDB_BASE_API}${url}`, {
    ...config,
    params: { api_key: import.meta.env.VITE_MOVIEDB_API_KEY, ...config?.params },
  });
}

function constructPath(path: string) {
  return import.meta.env.VITE_MOVIEDB_BASE_PATH + path;
}

function collectBasicData(data: ExpectedData[]) {
  return data.map((d) => ({
    id: d.id,
    title: d.title || d.original_title || d.name || d.original_name,
    backdrop: constructPath(d.backdrop_path),
    overview: d.overview,
    lang: d.original_language.toUpperCase(),
    date: d.release_date || d.first_air_date,
  }));
}

export function fetchHome(count: number = 6) {
  return Promise.all<AxiosResponse>([
    fetchMDB(Method.GET, 'trending/movie/day'),
    fetchMDB(Method.GET, 'trending/tv/day'),
    fetchMDB(Method.GET, 'discover/movie'),
    fetchMDB(Method.GET, 'discover/tv'),
  ]).then((res) => {
    type FinalData = {
      discover: {
        movies: BasicMetadata[];
        tvs: BasicMetadata[];
      };
      trending: {
        movies: BasicMetadata[];
        tvs: BasicMetadata[];
      };
    };

    const data = res.map((r) => ({ url: r.config.url, data: r.data.results.slice(0, count) }));
    let processedData = { discover: {}, trending: {} };

    for (const d of data) {
      const section = d.url?.includes('trending') ? 'trending' : 'discover';
      const categories = d.url?.includes('/movie') ? 'movies' : 'tvs';

      processedData = {
        ...processedData,
        [section]: {
          ...processedData[section],
          [categories]: collectBasicData(d.data),
        },
      };
    }

    return processedData as FinalData;
  });
}

export function fetchSearch(query: string, page: number) {
  return fetchMDB(Method.GET, 'search/multi', { params: { query, page } }).then(({ data }) => {
    let movie: ExpectedData[] = [],
      tv: ExpectedData[] = [];
    const pagination = {
      page: data.page,
      totalPages: data.total_pages,
      totalResults: data.total_results,
    };

    data.results.forEach((d: ExpectedData) => {
      if (d.media_type === 'movie') {
        movie.push(d);
      } else if (d.media_type === 'tv') {
        tv.push(d);
      }
    });

    return { pagination, movie: collectBasicData(movie), tv: collectBasicData(tv) };
  });
}
