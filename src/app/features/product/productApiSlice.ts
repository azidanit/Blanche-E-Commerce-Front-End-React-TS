import {
  IProductRequest,
  IProductResponse,
} from '../../../helpers/types/response.interface';
import { apiSlice } from '../../api/apiSlice';

export const productApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getProductBySlug: build.query<IProductResponse, IProductRequest>({
      query: ({ store, slug }) => ({
        url: `/products/${store}/${slug}`,
        method: 'GET',
      }),
      transformResponse: (response: { data: IProductResponse }) =>
        response.data,
      transformErrorResponse: (response) => response.data,
      providesTags: ['Product'],
    }),
  }),
});

export const { useGetProductBySlugQuery } = productApi;
