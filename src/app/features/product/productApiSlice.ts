import {
  IProductRequest,
  IProductResponse,
  IVariantProductResponse,
} from '../../../helpers/types/response.interface';
import { apiSlice } from '../../api/apiSlice';

export const productApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getProductBySlug: build.query<IProductResponse, IProductRequest>({
      query: ({ store, slug }) => ({
        url: `/products/${store}/${slug}/details`,
        method: 'GET',
      }),
      transformResponse: (response: { data: IProductResponse }) =>
        response.data,
      transformErrorResponse: (response) => response.data,
      providesTags: ['Product'],
    }),
    getProductVariantBySlug: build.query<
      IVariantProductResponse,
      IProductRequest
    >({
      query: ({ store, slug }) => ({
        url: `/products/${store}/${slug}/variants`,
        method: 'GET',
      }),
      transformResponse: (response: { data: IVariantProductResponse }) =>
        response.data,
      transformErrorResponse: (response) => response.data,
      providesTags: ['Product Variant'],
    }),
  }),
});

export const { useGetProductBySlugQuery, useGetProductVariantBySlugQuery } =
  productApi;
