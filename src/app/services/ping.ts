import { apiSlice } from '../api/apiSlice';

const pingApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getPing: build.query<any, void>({
      query: () => {
        return {
          url: '/ping',
          method: 'GET',
        };
      },
    }),
  }),
});

export const { useLazyGetPingQuery } = pingApi;
