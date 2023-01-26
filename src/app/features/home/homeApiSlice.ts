import {
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
  }),
});

export const { useGetProductsQuery } = homeApiSlice;
