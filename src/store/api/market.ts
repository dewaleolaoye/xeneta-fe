import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Rate } from 'interface';

export const marketApi = createApi({
  reducerPath: 'market',
  tagTypes: ['Rates'],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_BASE_URL,

    prepareHeaders: (headers, _) => {
      const uniqueKey = process.env.REACT_UNIQUE_KEY;

      headers.set('x-api-key', uniqueKey!);
      headers.set('Content-Type', 'application/json');
      headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getMarketRates: builder.query({
      query: ({ origin, destination }) =>
        `/rates?origin=${origin}&destination=${destination}`,

      transformResponse: (res: Rate[]) => res,
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetMarketRatesQuery } = marketApi;
