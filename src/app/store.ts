import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import searchReducer from './features/home/searchSlice';
import authReducer from './features/auth/authSlice';
import registerReducer from './features/auth/registerSlice';
import productReducer from './features/product/productSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    search: searchReducer,
    auth: authReducer,
    product: productReducer,
    register: registerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
