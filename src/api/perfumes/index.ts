import { PAGINATION_DEFAULT } from '@/constans/pagination';
import { IPagination } from '@/types/pagination';
import { IPerfume } from '@/types/perfume';
import { ENDPOINTS } from '../ENDPOINTS';
import { fetcher } from '../fetcher';
import { parseResponseData } from '../utils';

export const getPerfumes = ({
  pageIndex = PAGINATION_DEFAULT.PAGE_INDEX,
  pageSize = PAGINATION_DEFAULT.PAGE_SIZE,
}: IPagination) =>
  fetcher(`${ENDPOINTS.PERFUMES}?pageIndex=${pageIndex}&pageSize=${pageSize}`).then((resp) =>
    parseResponseData<IPerfume[]>(resp),
  );
