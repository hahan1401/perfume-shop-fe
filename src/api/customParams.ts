import { decodeDelimitedArray, encodeDelimitedArray } from 'serialize-query-params';

export const CommaArrayParam = {
  encode: (array: string[] | null | undefined): string | null | undefined => encodeDelimitedArray(array, ','),

  decode: (arrayStr: string | string[] | null | undefined): (string | null)[] | null | undefined =>
    decodeDelimitedArray(arrayStr, ','),
};
