import {
  ICreatePinRequest,
  IGetWalletDetailsResponse,
  IMakePaymentWithWalletReq,
  IMakePaymentWithWalletRes,
  IGetWalletHistoryResponse,
  ITopupWalletRequest,
  ITopupWalletResponse,
  IValidatePinRequest,
  IValidateResponse,
  IGetWalletHistoryRequest,
} from '../../../helpers/types';
import { apiSlice } from '../../api/apiSlice';

export const walletApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getWalletDetails: build.query<IGetWalletDetailsResponse, void>({
      query: () => ({
        url: '/users/wallet',
        method: 'GET',
      }),
      transformResponse: (response: { data: IGetWalletDetailsResponse }) =>
        response.data,
      transformErrorResponse: (response) => response.data,
      providesTags: ['Wallet'],
    }),
    createPin: build.mutation<null, ICreatePinRequest>({
      query: (body) => ({
        url: '/users/wallet/create-pin',
        method: 'POST',
        body,
      }),
      transformResponse: (response: { data: null }) => response.data,
      transformErrorResponse: (response) => response.data,
      invalidatesTags: ['Wallet'],
    }),
    topUpWallet: build.mutation<ITopupWalletResponse, ITopupWalletRequest>({
      query: (body) => ({
        url: '/users/wallet/topup',
        method: 'POST',
        body,
      }),
      transformResponse: (response: { data: ITopupWalletResponse }) =>
        response.data,
      transformErrorResponse: (response) => response.data,
      invalidatesTags: ['Wallet'],
    }),
    validatePin: build.mutation<IValidateResponse, IValidatePinRequest>({
      query: (body) => ({
        url: '/step-up/pin',
        method: 'POST',
        body,
      }),
      transformResponse: (response: IValidateResponse) => response,
      transformErrorResponse: (response) => response.data,
      invalidatesTags: ['Wallet'],
    }),
    cancelPayment: build.mutation<
      IMakePaymentWithWalletRes,
      IMakePaymentWithWalletReq
    >({
      query: (body) => ({
        url: '/users/wallet/cancel-payment',
        method: 'POST',
        body,
      }),
      transformResponse: (response: { data: IMakePaymentWithWalletRes }) =>
        response.data,
      transformErrorResponse: (response) => response.data,
    }),
    makePayment: build.mutation<
      IMakePaymentWithWalletRes,
      IMakePaymentWithWalletReq
    >({
      query: (body) => ({
        url: '/users/wallet/make-payment',
        method: 'POST',
        body,
      }),
      transformResponse: (response: { data: IMakePaymentWithWalletRes }) =>
        response.data,
      transformErrorResponse: (response) => response.data,
    }),
    getWalletHistory: build.query<
      IGetWalletHistoryResponse,
      IGetWalletHistoryRequest
    >({
      query: (params) => ({
        url: '/users/wallet/transactions',
        method: 'GET',
        params,
      }),
      transformResponse: (response: { data: IGetWalletHistoryResponse }) =>
        response.data,
      transformErrorResponse: (response) => response.data,
      providesTags: ['Wallet'],
    }),
  }),
});

export const {
  useGetWalletDetailsQuery,
  useCreatePinMutation,
  useTopUpWalletMutation,
  useValidatePinMutation,
  useCancelPaymentMutation,
  useMakePaymentMutation,
  useGetWalletHistoryQuery,
} = walletApi;
