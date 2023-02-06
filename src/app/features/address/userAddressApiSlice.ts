import { apiSlice } from '../../api/apiSlice';

export const userAddressApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getUserAddress: build.query({
      query: () => ({
        url: '/user/addresses',
        method: 'GET',
      }),
    }),
    addUserAddress: build.mutation({
      query: (body) => ({
        url: '/user/addresses',
        method: 'POST',
      }),
    }),
  }),
});
