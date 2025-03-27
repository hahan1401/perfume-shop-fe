export type ResponseData<T> =
  | { responseData: { data: T; total?: number }; error: undefined }
  | { responseData: undefined };

export interface PromiseFulfilledResult<T> {
  status: 'fulfilled';
  value: T;
}

export interface PromiseRejectedResult {
  status: 'rejected';
  reason: unknown;
}

export type PromiseSettledResult<T> = PromiseFulfilledResult<T> | PromiseRejectedResult;
