import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { fetchMovieDB, FetchMovieDBMethod } from 'utils/index';
import { hooksConstant } from 'utils/constants';

function _formatMetadata(res: AxiosResponse) {
  console.log(res);

  return {};
}

export default function useMovieDBHome() {
  const { query } = hooksConstant;

  useQuery({
    queryKey: [query.trending.movies],
    queryFn: () =>
      fetchMovieDB(FetchMovieDBMethod.GET, 'trending/movie/day', null, _formatMetadata),
  });
  useQuery({
    queryKey: [query.trending.tvs],
    queryFn: () => fetchMovieDB(FetchMovieDBMethod.GET, 'trending/tv/day', null, _formatMetadata),
  });
  useQuery({
    queryKey: [query.discover.movies],
    queryFn: () => fetchMovieDB(FetchMovieDBMethod.GET, 'discover/movie', null, _formatMetadata),
  });
  useQuery({
    queryKey: [query.discover.tvs],
    queryFn: () => fetchMovieDB(FetchMovieDBMethod.GET, 'discover/tv', null, _formatMetadata),
  });
}
