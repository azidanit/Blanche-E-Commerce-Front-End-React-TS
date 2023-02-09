import {
  ICartHomeResponse,
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
      invalidatesTags: ['Cart', 'CartHome'],
    }),
    updateCarts: build.mutation<ICartResponse, IUpdateCartRequest[]>({
      query: (body) => ({
        url: '/carts',
        method: 'PUT',
        body,
      }),
      transformResponse: (response: { data: ICartResponse }) => response.data,
      transformErrorResponse: (response) => response.data,
      invalidatesTags: ['Cart', 'CartHome'],
    }),
    updateCartItem: build.mutation<ICartResponse, IUpdateCartItemRequest>({
      query: (body) => ({
        url: `/carts/${body.cart_item_id}`,
        method: 'PATCH',
        body,
      }),
      transformResponse: (response: { data: ICartResponse }) => response.data,
      transformErrorResponse: (response) => response.data,
      invalidatesTags: ['Cart', 'CartHome'],
    }),
    deleteCartItem: build.mutation<ICartResponse, number>({
      query: (cart_item_id) => ({
        url: `/carts/${cart_item_id}`,
        method: 'DELETE',
      }),
      transformResponse: (response: { data: ICartResponse }) => response.data,
      transformErrorResponse: (response) => response.data,
      invalidatesTags: ['Cart', 'CartHome'],
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
    getCartHome: build.query<ICartHomeResponse, void>({
      query: () => ({
        url: '/carts/home',
        method: 'GET',
      }),
      transformResponse: (response: { data: ICartHomeResponse }) =>
        response.data,
      transformErrorResponse: (response) => response.data,
      providesTags: ['CartHome'],
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
  useGetCartHomeQuery,
} = cartApi;
