import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const unsplashApi = createApi({
  reducerPath: 'unsplashApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.unsplash.com',
  }),
  endpoints: (build) => ({
    getCards: build.query({
      query: (term) => ({
        url: '/search/photos',
        headers: {
          Authorization:
            'Client-ID LzIVqh3QqLsygMbORizZv7wTMFgpUaeropg3kTNemvw',
        },
        params: { query: term },
      }),
    }),
  }),
});
