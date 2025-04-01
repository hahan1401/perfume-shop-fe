import { PAGINATION_DEFAULT } from '@/constans/pagination';
import { toQueryString } from '@/lib/utils';
import { IPerfume } from '@/types/perfume';
import { IPerfumeFilter } from '@/types/perfume/filter';
import { ENDPOINTS } from '../ENDPOINTS';
import { fetcher } from '../fetcher';
import { parseResponseData } from '../utils';
import { perfumeParamsConfigMap } from './types';

export const getPerfumes = ({
  pageIndex = PAGINATION_DEFAULT.PAGE_INDEX,
  pageSize = PAGINATION_DEFAULT.PAGE_SIZE,
  ...filter
}: IPerfumeFilter) =>
  fetcher(`${ENDPOINTS.PERFUMES}?${toQueryString(perfumeParamsConfigMap, { pageIndex, pageSize, ...filter })}`).then(
    (resp) => parseResponseData<IPerfume[]>(resp),
  );

export const getPerfumeByName = (name: string) =>
  fetcher(`${ENDPOINTS.PERFUMES}/${name}`).then((resp) => parseResponseData<IPerfume>(resp));
