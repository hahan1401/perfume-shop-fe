import { IPagination } from '../pagination';

export interface IPerfumeFilter extends IPagination {
  brands?: string[];
  collections?: string[];
  minPrice?: number;
  maxPrice?: number;
}
