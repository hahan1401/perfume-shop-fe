export interface ResponseDataObject<T> {
  data: T;
  total?: number;
}

export type ResponseData<T> = { responseData: ResponseDataObject<T>; error: undefined } | { responseData: undefined };

export interface PromiseFulfilledResult<T> {
  status: 'fulfilled';
  value: T;
}

export interface PromiseRejectedResult {
  status: 'rejected';
  reason: unknown;
}

export type PromiseSettledResult<T> = PromiseFulfilledResult<T> | PromiseRejectedResult;
