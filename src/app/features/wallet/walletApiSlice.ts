import {
  ICreatePinRequest,
  IGetWalletDetailsResponse,
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
  }),
});

export const { useGetWalletDetailsQuery, useCreatePinMutation } = walletApi;
