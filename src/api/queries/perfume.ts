import { IPerfumeFilter } from '@/types/perfume/filter';
import { useQuery } from '@tanstack/react-query';
import { getPerfumes } from '../perfumes';
import { QUERY_KEYS } from './CONSTANTS';

export const useGetPerfumesQuery = (filter: IPerfumeFilter) =>
  useQuery({
    queryKey: [QUERY_KEYS.PERFUMES_LIST],
    queryFn: () => getPerfumes(filter),
    // staleTime: 60 * 1000,
  });
