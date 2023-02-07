import { IGetMerchantCategoriesResponse } from '../../../helpers/types';
import { IMerchantInfoResponse } from '../../../helpers/types/response.interface';
import { apiSlice } from '../../api/apiSlice';

export const merchantApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getMerchantInfo: build.query<IMerchantInfoResponse, string>({
      query: (domain) => ({
        url: `/merchants/${domain}/profile`,
        method: 'GET',
      }),
      transformResponse: (response: { data: IMerchantInfoResponse }) =>
        response.data,
      transformErrorResponse: (response) => response.data,
      providesTags: ['Merchant'],
    }),
    getMerchantCategories: build.query<IGetMerchantCategoriesResponse, string>({
      query: (domain) => ({
        url: `/merchants/${domain}/categories`,
        method: 'GET',
      }),
      transformResponse: (response: { data: IGetMerchantCategoriesResponse }) =>
        response.data,
      transformErrorResponse: (response) => response.data,
      providesTags: ['Merchant'],
    }),
  }),
});

export const { useGetMerchantInfoQuery, useGetMerchantCategoriesQuery } =
  merchantApi;
