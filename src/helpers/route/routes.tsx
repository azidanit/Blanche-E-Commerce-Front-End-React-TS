import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../../components/layouts/AppLayout';
import SearchResult from '../../pages/SearchResult';

const Home = lazy(() => import('../../pages/Home'));
const Login = lazy(() => import('../../pages/Auth/Login'));
const ProductDetail = lazy(() => import('../../pages/Product'));
const Register = lazy(() => import('../../pages/Auth/Register'));
const MerchantRegister = lazy(
  () => import('../../pages/Auth/MerchantRegister'),
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '',
        element: <Home />,
        children: [],
      },
      {
        path: 'product/:store/:slug',
        element: <ProductDetail />,
        children: [],
      },
      {
        path: '/merchant-register',
        element: <MerchantRegister />,
        children: [],
      },
      {
        path: 'search',
        element: <SearchResult />,
        children: [],
      },
    ],
  },

  {
    path: '/login',
    element: <Login />,
    children: [],
  },
  {
    path: '/register',
    element: <Register />,
    children: [],
  },
]);
