import {} from '../../../helpers/types';
import { apiSlice } from '../../api/apiSlice';

export const transactionsApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getTransactions: build.query<any, void>({
      query: () => ({
        url: '/users/transactions',
        method: 'GET',
      }),
      transformResponse: (response: { data: any }) => response.data,
      transformErrorResponse: (response) => response.data,
      providesTags: ['Transaction'],
    }),
  }),
});

export const { useGetTransactionsQuery } = transactionsApi;
