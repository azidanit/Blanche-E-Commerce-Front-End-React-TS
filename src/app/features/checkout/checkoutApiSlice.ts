import {
  ICheckoutRequest,
  ICheckoutResponse,
  ICheckoutSummaryRequest,
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
  }),
});

export const { useCheckoutMutation, useCheckoutSummaryMutation } = checkoutApi;
