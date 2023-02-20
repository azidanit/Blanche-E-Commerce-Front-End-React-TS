import {
  IMerchantTransactionListRequest,
  IMerchantTransactionListResponse,
  IUpdateMerchantOrderStatusRequest,
} from '../../../helpers/types/merchant/merchant-order.interface';
import { apiSlice } from '../../api/apiSlice';

export const merchantApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getMerchantOrders: build.query<
      IMerchantTransactionListResponse,
      IMerchantTransactionListRequest
    >({
      query: (params) => ({
        url: '/merchants/transactions',
        method: 'GET',
        params,
      }),
      transformResponse: (response: {
        data: IMerchantTransactionListResponse;
      }) => response.data,
      transformErrorResponse: (response) => response.data,
      providesTags: ['Merchant Transaction'],
    }),
    UpdateMerchantOrderStatus: build.mutation<
      IMerchantTransactionListResponse,
      IUpdateMerchantOrderStatusRequest
    >({
      query: (body) => ({
        url: `/merchants/transactions/${body.invoice_code}/status`,
        method: 'PUT',
        body,
      }),
      transformResponse: (response: {
        data: IMerchantTransactionListResponse;
      }) => response.data,
      transformErrorResponse: (response) => response.data,
      invalidatesTags: ['Merchant Transaction'],
    }),
  }),
});

export const {
  useGetMerchantOrdersQuery,
  useUpdateMerchantOrderStatusMutation,
} = merchantApi;
