import { IPerffumeCollection } from '@/types/perfumeCollections';
import { ENDPOINTS } from '../ENDPOINTS';
import { fetcher } from '../fetcher';
import { parseResponseData } from '../utils';

export const getPerfumeCollections = () =>
  fetcher(ENDPOINTS.PERFUME_COLLECTIONS).then((resp) => parseResponseData<IPerffumeCollection[]>(resp));
