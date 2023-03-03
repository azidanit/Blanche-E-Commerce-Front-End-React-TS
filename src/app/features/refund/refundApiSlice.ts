import { IParams } from '../../../helpers/types';
import { IGetRefundResponse } from '../../../helpers/types/refund.interface';
import { apiSlice } from '../../api/apiSlice';

export const refundApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    makeRequestRefund: build.mutation<void, FormData>({
      query: (formData) => ({
        url: '/users/refund-requests',
        method: 'POST',
        body: formData,
      }),
      transformResponse: (response: { data: void }) => response.data,
      transformErrorResponse: (response) => response.data,
      invalidatesTags: ['Refunds'],
    }),
    getRefundList: build.query<IGetRefundResponse, IParams>({
      query: (params) => ({
        url: '/users/refund-requests',
        method: 'GET',
        params,
      }),
      transformResponse: (response: { data: IGetRefundResponse }) =>
        response.data,
      transformErrorResponse: (response) => response.data,
      providesTags: ['Refunds'],
    }),
    userApproveResult: build.mutation<void, number>({
      query: (id) => ({
        url: `/users/refund-requests/${id}/accept`,
        method: 'POST',
      }),
      transformResponse: (response: { data: void }) => response.data,
      transformErrorResponse: (response) => response.data,
      invalidatesTags: ['Refunds'],
    }),
    userRejectResult: build.mutation<void, number>({
      query: (id) => ({
        url: `/users/refund-requests/${id}/reject`,
        method: 'POST',
      }),
      transformResponse: (response: { data: void }) => response.data,
      transformErrorResponse: (response) => response.data,
      invalidatesTags: ['Refunds'],
    }),
    userCancelRefund: build.mutation<void, number>({
      query: (id) => ({
        url: `/users/refund-requests/${id}/cancel`,
        method: 'POST',
      }),
      transformResponse: (response: { data: void }) => response.data,
      transformErrorResponse: (response) => response.data,
      invalidatesTags: ['Refunds'],
    }),
  }),
});

export const {
  useMakeRequestRefundMutation,
  useGetRefundListQuery,
  useUserApproveResultMutation,
  useUserRejectResultMutation,
  useUserCancelRefundMutation,
} = refundApiSlice;
