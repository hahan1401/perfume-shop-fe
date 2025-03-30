import { PAGINATION_DEFAULT } from '@/constans/pagination';
import { IPerfume } from '@/types/perfume';
import { IPerfumeFilter } from '@/types/perfume/filter';
import { ENDPOINTS } from '../ENDPOINTS';
import { fetcher } from '../fetcher';
import { parseResponseData } from '../utils';

export const getPerfumes = ({
  pageIndex = PAGINATION_DEFAULT.PAGE_INDEX,
  pageSize = PAGINATION_DEFAULT.PAGE_SIZE,
}: IPerfumeFilter) =>
  fetcher(`${ENDPOINTS.PERFUMES}?pageIndex=${pageIndex}&pageSize=${pageSize}`).then((resp) =>
    parseResponseData<IPerfume[]>(resp),
  );
