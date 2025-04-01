/* eslint-disable no-unused-vars */

import { IPerfume } from '@/types/perfume';
import { NumberParam, QueryParamConfigMap, StringParam } from 'serialize-query-params';
import { CommaArrayParam } from '../customParams';
import { PaginationEnum } from '../types/common';

export interface IPerfumeListResponse {
  data: IPerfume[];
  total: number;
}

export enum PerfumeSeachParamsEnum {
  brands = 'brands',
  collections = 'collections',
  minPrice = 'minPrice',
  maxPrice = 'maxPrice',
  name = 'name',
}

export type TPerfumeSearchParams = keyof typeof PaginationEnum | keyof typeof PerfumeSeachParamsEnum;

export const perfumeParamsConfigMap: Record<TPerfumeSearchParams, unknown> extends QueryParamConfigMap
  ? Record<TPerfumeSearchParams, unknown>
  : QueryParamConfigMap = {
  brands: CommaArrayParam,
  collections: CommaArrayParam,
  maxPrice: NumberParam,
  minPrice: NumberParam,
  name: StringParam,
  pageIndex: NumberParam,
  pageSize: NumberParam,
} as QueryParamConfigMap;
