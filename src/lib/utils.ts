import { clsx, type ClassValue } from 'clsx';
import queryString from 'query-string';
import { decodeQueryParams as decode, encodeQueryParams, searchStringToObject } from 'serialize-query-params';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const toVietNamCurrency = (price: number) =>
  new Intl.NumberFormat('vi-VN', { currency: 'VND', style: 'currency' }).format(price);

export const toQueryString = (...args: Parameters<typeof encodeQueryParams>): string => {
  return queryString.stringify(encodeQueryParams(...args));
};

export const decodeQueryParams = <T>(
  paramConfigMap: Parameters<typeof decode>[0],
  queryInput: string | Record<string, string>,
) => {
  if (typeof queryInput === 'string') {
    const obj = searchStringToObject(queryInput);
    return decode(paramConfigMap, obj) as T;
  }
  return decode(paramConfigMap, queryInput) as T;
};
