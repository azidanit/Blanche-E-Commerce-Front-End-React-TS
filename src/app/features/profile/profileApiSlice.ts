import { IGetProfileResponse } from '../../../helpers/types';
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
  }),
});

export const { useGetProfileQuery, useLazyGetProfileQuery } = profileApi;
