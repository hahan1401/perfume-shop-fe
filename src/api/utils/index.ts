import { PromiseSettledResult, ResponseData } from '@/types';

export const parseResponseData = <T = unknown>(resp: Response): Promise<ResponseData<T>> => {
  try {
    if (!resp.ok && resp.status !== 400) {
      throw new Error('Failed to fetch data!');
    }
    return resp.json() as Promise<ResponseData<T>>;
  } catch (error) {
    console.error('Fetch data error: ', error);
    return Promise.resolve<ResponseData<T>>({ responseData: undefined } as ResponseData<T>);
  }
};

export const getFulfilledResponse = <T>(resp: PromiseSettledResult<T>) => {
  if (resp.status === 'fulfilled') return resp.value;
  console.error('Failed to fetch data in allSettled', resp.reason);
};
