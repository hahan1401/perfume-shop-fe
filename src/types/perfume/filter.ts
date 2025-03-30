import { IPagination } from '../pagination';

export interface IPerfumeFilter extends IPagination {
  brand?: string[];
  collection?: string[];
  minPrice?: number;
  maxPrice?: number;
}
