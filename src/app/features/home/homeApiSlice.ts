import {
  IGetCategoriesRequest,
  IGetCategoriesResponse,
  IGetProductListRequest,
  IGetProductListResponse,
} from '../../../helpers/types';
import { apiSlice } from '../../api/apiSlice';

const homeApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<IGetProductListResponse, IGetProductListRequest>({
      query: (params) => {
        return { url: 'products', method: 'GET', params };
      },
      transformResponse: (response: { data: IGetProductListResponse }) =>
        response.data,
      transformErrorResponse: (response) => response.data,
    }),
    getCategories: build.query<IGetCategoriesResponse, IGetCategoriesRequest>({
      query: (params) => {
        return { url: 'categories', method: 'GET', params };
      },
      transformResponse: (response: { data: IGetCategoriesResponse }) =>
        response.data,
      transformErrorResponse: (response) => response.data,
    }),
  }),
});

export const { useGetProductsQuery, useGetCategoriesQuery } = homeApiSlice;
