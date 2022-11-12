import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PortsRO, Rate, RateDTO } from 'interface';
import { BASE_URL } from 'configs';

export const marketApi = createApi({
  reducerPath: 'market',
  tagTypes: ['Rates'],
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,

    headers: {
      'x-api-key': 'W8rspNVYZj4oMqWpoDWY71G4kL0yDwPk5oNn7MSk',
    },
  }),

  endpoints: (builder) => ({
    getMarketRates: builder.query({
      query: ({ destination, origin }: RateDTO) =>
        `/rates?origin=${origin}&destination=${destination}`,

      transformResponse: (res: Rate[]) => res,
    }),

    getPorts: builder.query({
      query: () => `/ports`,
      transformResponse: (res: PortsRO[]) => res,
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetMarketRatesQuery, useGetPortsQuery } = marketApi;
