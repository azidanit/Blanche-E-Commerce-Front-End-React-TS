import {
  ICartResponse,
  ICreateCartRequest,
  IDeleteSelectedCartRequest,
  IUpdateCartItemRequest,
  IUpdateCartRequest,
} from '../../../helpers/types';
import { apiSlice } from '../../api/apiSlice';

const cartApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getCarts: build.query<ICartResponse, void>({
      query: () => ({
        url: '/carts',
        method: 'GET',
      }),
      transformResponse: (response: { data: ICartResponse }) => response.data,
      transformErrorResponse: (response) => response.data,
      providesTags: ['Cart'],
    }),
    createCarts: build.mutation<ICartResponse, ICreateCartRequest>({
      query: (body) => ({
        url: '/carts',
        method: 'POST',
        body,
      }),
      transformResponse: (response: { data: ICartResponse }) => response.data,
      transformErrorResponse: (response) => response.data,
      invalidatesTags: ['Cart'],
    }),
    updateCarts: build.mutation<ICartResponse, IUpdateCartRequest[]>({
      query: (body) => ({
        url: '/carts',
        method: 'PUT',
        body,
      }),
      transformResponse: (response: { data: ICartResponse }) => response.data,
      transformErrorResponse: (response) => response.data,
      invalidatesTags: ['Cart'],
    }),
    updateCartItem: build.mutation<ICartResponse, IUpdateCartItemRequest>({
      query: (body) => ({
        url: `/carts/${body.cart_item_id}`,
        method: 'PATCH',
        body,
      }),
      transformResponse: (response: { data: ICartResponse }) => response.data,
      transformErrorResponse: (response) => response.data,
      invalidatesTags: ['Cart'],
    }),
    deleteCartItem: build.mutation<ICartResponse, number>({
      query: (cart_item_id) => ({
        url: `/carts/${cart_item_id}`,
        method: 'DELETE',
      }),
      transformResponse: (response: { data: ICartResponse }) => response.data,
      transformErrorResponse: (response) => response.data,
      invalidatesTags: ['Cart'],
    }),
    deleteSelectedCart: build.mutation<
      ICartResponse,
      IDeleteSelectedCartRequest
    >({
      query: (body) => ({
        url: `/carts`,
        method: 'DELETE',
        body,
      }),
      transformResponse: (response: { data: ICartResponse }) => response.data,
      transformErrorResponse: (response) => response.data,
      invalidatesTags: ['Cart'],
    }),
  }),
});

export const {
  useGetCartsQuery,
  useCreateCartsMutation,
  useUpdateCartsMutation,
  useUpdateCartItemMutation,
  useDeleteCartItemMutation,
  useDeleteSelectedCartMutation,
} = cartApi;
