const domain = process.env.NEXT_PUBLIC_API_DOMAIN;

export const fetcher = (endpoint: string, init?: RequestInit) => {
  return fetch(`${domain}${endpoint}`, {
    ...init,
    headers: {
      ...init?.headers,
      'Content-Type': 'application/json',
    },
  });
};
