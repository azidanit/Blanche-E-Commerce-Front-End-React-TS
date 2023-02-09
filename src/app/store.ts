import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import authReducer from './features/auth/authSlice';
import registerReducer from './features/auth/registerSlice';
import productReducer from './features/product/productSlice';
import paramsReducer from './features/home/paramsSlice';
import cartReducer from './features/cart/cartSlice';
import transactionsReducer from './features/transactions/transactionsSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    product: productReducer,
    params: paramsReducer,
    register: registerReducer,
    cart: cartReducer,
    transactions: transactionsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
