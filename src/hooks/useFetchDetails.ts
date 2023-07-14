import { useQuery } from '@tanstack/react-query';
import { fetchDetails } from 'utils/fetch';

export default function useFetchDetails(id: string, type: string) {
  return useQuery({
    queryKey: ['moviedb', 'details', type, id],
    queryFn: () => fetchDetails(id, type),
  });
}
