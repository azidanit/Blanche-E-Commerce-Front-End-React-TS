
import { apiSlice } from '../../api/apiSlice';

export const userAddressApi =apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getUserAddress: build.query({
            query: () => ({
                url: '/user/address',
                method: 'GET'
            })
        })
    })
})