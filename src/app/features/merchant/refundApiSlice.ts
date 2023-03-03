import { IParams } from '../../../helpers/types';
import { IGetRefundResponse } from '../../../helpers/types/refund.interface';
import { apiSlice } from '../../api/apiSlice';

export const refundApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getRefundMerchantList: build.query<IGetRefundResponse, IParams>({
      query: (params) => ({
        url: '/merchants/refund-requests',
        method: 'GET',
        params,
      }),
      transformResponse: (response: { data: IGetRefundResponse }) =>
        response.data,
      transformErrorResponse: (response) => response.data,
      providesTags: ['Refunds'],
    }),
    merchantAcceptRequest: build.mutation<void, number>({
      query: (id) => ({
        url: `/merchants/refund-requests/${id}/accept`,
        method: 'POST',
      }),
      transformResponse: (response: { data: void }) => response.data,
      transformErrorResponse: (response) => response.data,
      invalidatesTags: ['Refunds'],
    }),
    merchantRejectRequest: build.mutation<void, number>({
      query: (id) => ({
        url: `/merchants/refund-requests/${id}/reject`,
        method: 'POST',
      }),
      transformResponse: (response: { data: void }) => response.data,
      transformErrorResponse: (response) => response.data,
      invalidatesTags: ['Refunds'],
    }),
  }),
});

export const {
  useGetRefundMerchantListQuery,
  useMerchantAcceptRequestMutation,
  useMerchantRejectRequestMutation,
} = refundApiSlice;
