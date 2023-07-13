import { useQuery } from '@tanstack/react-query';
import { fetchHome } from 'utils/index';

export default function useFetchHome() {
  return useQuery({
    queryKey: ['moviedb', 'home'],
    queryFn: () => fetchHome(),
  });
}
