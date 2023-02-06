import {
  IAddSealabsPayAccountRequest,
  IAddSealabsPayAccountResponse,
  IGetProfileResponse,
  IGetSealabsPayAccountsResponse,
} from '../../../helpers/types';
import { apiSlice } from '../../api/apiSlice';

export const profileApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getProfile: build.query<IGetProfileResponse, void>({
      query: () => ({
        url: '/users/profile',
        method: 'GET',
      }),
      transformResponse: (response: { data: IGetProfileResponse }) =>
        response.data,
      transformErrorResponse: (response) => response.data,
      providesTags: ['User'],
    }),
    getSealabsPayAccount: build.query<IGetSealabsPayAccountsResponse, void>({
      query: () => ({
        url: '/users/slp-accounts',
        method: 'GET',
      }),
      transformResponse: (response: { data: IGetSealabsPayAccountsResponse }) =>
        response.data,
      transformErrorResponse: (response) => response.data,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'SLP', id } as const)),
              { type: 'SLP', id: 'LIST' },
            ]
          : [{ type: 'SLP', id: 'LIST' }],
    }),
    deleteSealabsPayAccount: build.mutation<null, number>({
      query: (id) => ({
        url: `/users/slp-accounts/${id}`,
        method: 'DELETE',
      }),
      transformErrorResponse: (response) => response.data,
      invalidatesTags: (result, error, id) => [{ type: 'SLP', id }],
    }),
    addSealabsPayAccount: build.mutation<
      IAddSealabsPayAccountResponse,
      IAddSealabsPayAccountRequest
    >({
      query: (body) => ({
        url: '/users/slp-accounts',
        method: 'POST',
        body,
      }),
      transformResponse: (response: { data: IAddSealabsPayAccountResponse }) =>
        response.data,
      transformErrorResponse: (response) => response.data,
      invalidatesTags: [{ type: 'SLP', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetProfileQuery,
  useLazyGetProfileQuery,
  useGetSealabsPayAccountQuery,
  useDeleteSealabsPayAccountMutation,
  useAddSealabsPayAccountMutation,
} = profileApi;
