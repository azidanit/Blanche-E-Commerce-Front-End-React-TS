import {
  ICheckDomainRequest,
  ICheckDomainResponse,
  ICheckStoreNameRequest,
  ICheckStoreNameResponse,
  ICreateMerchantRequest,
  IDeliveryOptionsResponse,
  IGetShippingOptionsResponse,
  IMerchantInfoResponse,
  IVoucherMerchantResponse,
} from '../../../helpers/types';
import { IGetMerchantCategoriesResponse } from '../../../helpers/types';
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
    createMerchant: build.mutation<null, ICreateMerchantRequest>({
      query: (body) => ({
        url: '/merchants/register',
        method: 'POST',
        body,
      }),
      transformResponse: (response: null) => response,
      transformErrorResponse: (response) => response.data,
      invalidatesTags: ['Merchant'],
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
    checkStoreName: build.mutation<
      ICheckStoreNameResponse,
      ICheckStoreNameRequest
    >({
      query: (body) => ({
        url: '/merchants/register/check-name',
        method: 'POST',
        body,
      }),
      transformResponse: (response: { data: ICheckStoreNameResponse }) =>
        response.data,
      transformErrorResponse: (response) => response.data,
    }),
    checkDomain: build.mutation<ICheckDomainResponse, ICheckDomainRequest>({
      query: (body) => ({
        url: '/merchants/register/check-domain',
        method: 'POST',
        body,
      }),
      transformResponse: (response: { data: ICheckDomainResponse }) =>
        response.data,
      transformErrorResponse: (response) => response.data,
    }),
    getVoucherMerchant: build.query<IVoucherMerchantResponse[], string>({
      query: (domain) => ({
        url: `merchants/${domain}/vouchers`,
        method: 'GET',
      }),
      transformResponse: (response: { data: IVoucherMerchantResponse[] }) =>
        response.data,
      transformErrorResponse: (response) => response.data,
    }),
    getDeliveryOptions: build.query<IDeliveryOptionsResponse, string>({
      query: (domain) => ({
        url: `merchants/${domain}/deliveries`,
        method: 'GET',
      }),
      transformResponse: (response: { data: IDeliveryOptionsResponse }) =>
        response.data,
      transformErrorResponse: (response) => response.data,
    }),
    getShippingOptions: build.query<IGetShippingOptionsResponse, void>({
      query: () => ({
        url: '/deliveries',
        method: 'GET',
      }),
      transformResponse: (response: { data: IGetShippingOptionsResponse }) =>
        response.data,
      transformErrorResponse: (response) => response.data,
    }),
  }),
});

export const {
  useGetMerchantInfoQuery,
  useGetMerchantCategoriesQuery,
  useCreateMerchantMutation,
  useCheckStoreNameMutation,
  useCheckDomainMutation,
  useGetVoucherMerchantQuery,
  useGetDeliveryOptionsQuery,
} = merchantApi;
