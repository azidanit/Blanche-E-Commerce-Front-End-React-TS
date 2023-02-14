import {
  IGetTransactionListRequest,
  IGetTransactionListResponse,
  IGetTransactionDetailsResponse,
} from '../../../helpers/types';
import { apiSlice } from '../../api/apiSlice';

export const transactionsApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getTransactions: build.query<
      IGetTransactionListResponse,
      IGetTransactionListRequest
    >({
      query: (params) => ({
        url: '/users/transactions',
        method: 'GET',
        params,
      }),
      transformResponse: (response: { data: IGetTransactionListResponse }) =>
        response.data,
      transformErrorResponse: (response) => response.data,
      providesTags: ['Transaction'],
    }),
    getTransactionDetails: build.query<IGetTransactionDetailsResponse, string>({
      query: (slug) => ({
        url: `/users/transactions/${slug}`,
        method: 'GET',
      }),
      transformResponse: (response: { data: IGetTransactionDetailsResponse }) =>
        response.data,
      transformErrorResponse: (response) => response.data,
      providesTags: ['Transaction'],
    }),
  }),
});

export const { useGetTransactionsQuery, useGetTransactionDetailsQuery } =
  transactionsApi;
