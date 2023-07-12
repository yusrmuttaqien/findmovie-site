import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { fetchMovieDB, FetchMovieDBMethod } from 'utils/index';

function _formatMetadata(res: AxiosResponse) {
  console.log(res);

  return {};
}

export default function useMovieDBHome() {
  useQuery({
    queryKey: ['trendMovies'],
    queryFn: () =>
      fetchMovieDB(FetchMovieDBMethod.GET, 'trending/movie/day', null, _formatMetadata),
  });
  useQuery({
    queryKey: ['trendTVs'],
    queryFn: () => fetchMovieDB(FetchMovieDBMethod.GET, 'trending/tv/day', null, _formatMetadata),
  });
  useQuery({
    queryKey: ['discoverMovies'],
    queryFn: () => fetchMovieDB(FetchMovieDBMethod.GET, 'discover/movie', null, _formatMetadata),
  });
  useQuery({
    queryKey: ['discoverTVs'],
    queryFn: () => fetchMovieDB(FetchMovieDBMethod.GET, 'discover/tv', null, _formatMetadata),
  });
}
