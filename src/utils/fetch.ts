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
  media_type: 'movie' | 'tv' | 'person';
};

type ExpectedPersonData = {
  name: string;
  known_for_department?: string;
  profile_path: string;
  character?: string;
};

export type BasicMetadata = {
  id: number;
  title: string;
  backdrop: string;
  overview: string;
  lang: string;
  date: string;
};

export type DetailsMetadata = {
  id: string;
  title: string;
  backdrop: string;
  overview: string;
  genres: string[];
  production: string[];
  credits: {
    name: string;
    character: string;
    profile: string;
  }[];
  episodes: number;
  seasons: number;
  latestEpisode?: BasicMetadata;
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
    backdrop: constructPath(d.backdrop_path || ''),
    overview: d.overview,
    lang: d.original_language?.toUpperCase(),
    date: d.release_date || d.first_air_date,
  }));
}

function collectPersonBasicData(data: ExpectedPersonData[]) {
  return data.map((d) => ({
    name: d.name,
    character: d.character || d.known_for_department,
    profile: constructPath(d.profile_path || 'null'),
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
      tv: ExpectedData[] = [],
      people: ExpectedPersonData[] = [];
    const pagination = {
      page: data.page,
      totalPages: data.total_pages,
      totalResults: data.total_results,
    };

    data.results.forEach((d: ExpectedData & ExpectedPersonData) => {
      if (d.media_type === 'movie') {
        movie.push(d);
      } else if (d.media_type === 'tv') {
        tv.push(d);
      } else if (d.media_type === 'person') {
        people.push(d);
      }
    });

    return {
      pagination,
      movie: collectBasicData(movie),
      tv: collectBasicData(tv),
      people: collectPersonBasicData(people),
    };
  });
}

export function fetchDetails(id: string, type: string) {
  return fetchMDB(Method.GET, `${type}/${id}`).then(async ({ data }) => {
    const credits = await fetchMDB(Method.GET, `${type}/${id}/credits`);
    let tvs = {};

    if (type === 'tv') {
      tvs = {
        episodes: data.number_of_episodes,
        seasons: data.number_of_seasons,
        latestEpisode: {
          title: data.last_episode_to_air.name,
          backdrop: constructPath(data.last_episode_to_air.still_path),
          overview: data.last_episode_to_air.overview,
          lang: data.original_language.toUpperCase(),
          date: data.last_episode_to_air.air_date,
        },
      };
    }

    return {
      id: data.id,
      title: data.title || data.original_title || data.name || data.original_name,
      backdrop: constructPath(data.backdrop_path),
      overview: data.overview,
      genres: data.genres.map((g: { name: string }) => g.name),
      production: data.production_companies.map((p: { name: string }) => p.name),
      credits: collectPersonBasicData(credits.data.cast.splice(0, 10)),
      ...tvs,
    };
  });
}
