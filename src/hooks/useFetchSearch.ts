import { useQuery } from '@tanstack/react-query';
import { fetchSearch } from 'utils/index';

export default function useFetchSearch(query: string, page: number) {
  return useQuery({
    queryKey: ['moviedb', 'search', query, page],
    queryFn: () => fetchSearch(query, page),
  });
}
