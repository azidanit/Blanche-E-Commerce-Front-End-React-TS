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
  IPutShippingOptionsRequest,
  IGetMerchantProductListResponse,
  IGetMerchantProductListRequest,
  ICreateProductRequest,
} from '../../../helpers/types';
import { IGetMerchantCategoriesResponse } from '../../../helpers/types';
import {
  ICheckProductNameResponse,
  IUploadProductImageResponse,
  ICheckProductNameRequest,
  IGetProductByIDResponse,
  IGetVariantsByIDResponse,
} from '../../../helpers/types/merchant/product.interface';
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
        url: '/merchants/deliveries',
        method: 'GET',
      }),
      transformResponse: (response: { data: IGetShippingOptionsResponse }) =>
        response.data,
      transformErrorResponse: (response) => response.data,
      providesTags: ['Shipping'],
    }),
    putShippingOptions: build.mutation<null, IPutShippingOptionsRequest>({
      query: (body) => ({
        url: '/merchants/deliveries',
        method: 'PUT',
        body,
      }),
      transformResponse: (response: { data: null }) => response.data,
      transformErrorResponse: (response) => response.data,
      invalidatesTags: ['Shipping'],
    }),
    getProductList: build.query<
      IGetMerchantProductListResponse,
      IGetMerchantProductListRequest
    >({
      query: (params) => ({
        url: '/merchants/products',
        method: 'GET',
        params,
      }),
      transformResponse: (response: {
        data: IGetMerchantProductListResponse;
      }) => response.data,
      transformErrorResponse: (response) => response.data,
      providesTags: ['Product'],
    }),
    createProduct: build.mutation<null, ICreateProductRequest>({
      query: (body) => ({
        url: '/merchants/products',
        method: 'POST',
        body,
      }),
      transformResponse: (response: { data: null }) => response.data,
      transformErrorResponse: (response) => response.data,
      invalidatesTags: ['Product'],
    }),
    uploadProductImage: build.mutation<IUploadProductImageResponse, FormData>({
      query: (body) => ({
        url: '/merchants/products/images',
        method: 'POST',
        body,
      }),
      transformResponse: (response: { data: IUploadProductImageResponse }) =>
        response.data,
      transformErrorResponse: (response) => response.data,
    }),
    checkProductName: build.mutation<
      ICheckProductNameResponse,
      ICheckProductNameRequest
    >({
      query: (body) => ({
        url: '/merchants/products/check-name',
        method: 'POST',
        body,
      }),
      transformResponse: (response: { data: ICheckProductNameResponse }) =>
        response.data,
      transformErrorResponse: (response) => response.data,
    }),
    deleteProduct: build.mutation<null, number>({
      query: (id) => ({
        url: `/merchants/products/${id}`,
        method: 'DELETE',
      }),
      transformResponse: (response: { data: null }) => response.data,
      transformErrorResponse: (response) => response.data,
      invalidatesTags: ['Product'],
    }),
    getProductByID: build.query<IGetProductByIDResponse, number>({
      query: (id) => ({
        url: `/merchants/products/${id}`,
        method: 'GET',
      }),
      transformResponse: (response: { data: IGetProductByIDResponse }) =>
        response.data,
      transformErrorResponse: (response) => response.data,
      providesTags: ['Product'],
    }),
    getVariantsByID: build.query<IGetVariantsByIDResponse, number>({
      query: (id) => ({
        url: `/merchants/products/${id}/variants`,
        method: 'GET',
      }),
      transformResponse: (response: { data: IGetVariantsByIDResponse }) =>
        response.data,
      transformErrorResponse: (response) => response.data,
      providesTags: ['Product'],
    }),
    updateProduct: build.mutation<null, ICreateProductRequest>({
      query: ({ id, ...body }) => ({
        url: `/merchants/products/${id}`,
        method: 'PUT',
        body,
      }),
      transformResponse: (response: { data: null }) => response.data,
      transformErrorResponse: (response) => response.data,
      invalidatesTags: ['Product'],
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
  useGetShippingOptionsQuery,
  usePutShippingOptionsMutation,
  useGetProductListQuery,
  useCreateProductMutation,
  useUploadProductImageMutation,
  useCheckProductNameMutation,
  useDeleteProductMutation,
  useGetProductByIDQuery,
  useGetVariantsByIDQuery,
  useUpdateProductMutation,
} = merchantApi;
