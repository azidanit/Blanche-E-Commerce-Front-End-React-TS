import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://e5d88c55-2724-4f33-b4da-63382e9a03dc.mock.pstmn.io/api/v1',
});

const baseQueryWithReauth: typeof baseQuery = async (
  args,
  api,
  extraOptions,
) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error) {
    const { status } = result.error;
    if (status === 403) {
      const refreshResult = await baseQuery('/auth/refresh', api, extraOptions);
      if (refreshResult.error) {
        //TODO CALL LOGOUT API
        // api.dispatch(logOut());
      } else {
        //TODO CALL LOGIN API
        // api.dispatch(logIn());
        result = await baseQuery(args, api, extraOptions);
      }
    } else if (status === 401) {
      //TODO CALL REFRESH TOKEN API
      // api.dispatch(logOut());
    }
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: [],
  endpoints: () => ({}),
});
