import { IBrand } from '@/types/brand';
import { ENDPOINTS } from '../ENDPOINTS';
import { fetcher } from '../fetcher';
import { parseResponseData } from '../utils';

export const getBrands = () => fetcher(ENDPOINTS.BRANDS).then((resp) => parseResponseData<IBrand[]>(resp));
