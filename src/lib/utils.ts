import { clsx, type ClassValue } from 'clsx';
import queryString from 'query-string';
import { decodeQueryParams as decode, encodeQueryParams } from 'serialize-query-params';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const toVietNamCurrency = (price: number) =>
  new Intl.NumberFormat('vi-VN', { currency: 'VND', style: 'currency' }).format(price);

export const toQueryString = (...args: Parameters<typeof encodeQueryParams>): string => {
  return queryString.stringify(encodeQueryParams(...args));
};

export const decodeQueryParams = <T>(...args: Parameters<typeof decode>) => {
  return decode(...args) as T;
};
