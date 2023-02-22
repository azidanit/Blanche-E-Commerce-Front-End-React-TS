import {
  ICheckoutRequest,
  ICheckoutResponse,
  ICheckoutSummaryRequest,
  IPayRequest,
  IPayResponse,
} from '../../../helpers/types';
import { apiSlice } from '../../api/apiSlice';

export const checkoutApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    checkout: build.mutation<ICheckoutResponse, ICheckoutRequest[]>({
      query: (body) => ({
        url: '/orders',
        method: 'POST',
        body,
      }),
      transformResponse: (response: { data: ICheckoutResponse }) =>
        response.data,
      transformErrorResponse: (response) => response.data,
    }),
    checkoutSummary: build.mutation<ICheckoutResponse, ICheckoutSummaryRequest>(
      {
        query: (body) => ({
          url: '/orders/summary',
          method: 'POST',
          body,
        }),
        transformResponse: (response: { data: ICheckoutResponse }) =>
          response.data,
        transformErrorResponse: (response) => response.data,
      },
    ),
    paymentTransactions: build.mutation<IPayResponse, IPayRequest>({
      query: (body) => ({
        url: '/users/transactions',
        method: 'POST',
        body,
      }),
      transformResponse: (response: { data: IPayResponse }) => response.data,
      transformErrorResponse: (response) => response.data,
      invalidatesTags: ['CartHome'],
    }),
  }),
});

export const {
  useCheckoutMutation,
  useCheckoutSummaryMutation,
  usePaymentTransactionsMutation,
} = checkoutApi;
