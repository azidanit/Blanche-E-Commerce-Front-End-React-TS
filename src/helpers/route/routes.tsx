import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../../components/layouts/AppLayout';

const Home = lazy(() => import('../../pages/Home'));
const Login = lazy(() => import('../../pages/Auth/Login'));
const ProductDetail = lazy(() => import('../../pages/Product'));
const Register = lazy(() => import('../../pages/Auth/Register'));
const MerchantRegister = lazy(
  () => import('../../pages/Auth/MerchantRegister'),
);
const Cart = lazy(() => import('../../pages/Cart'));
const Profile = lazy(() => import('../../pages/Profile'));
const Category = lazy(() => import('../../pages/Category'));
const Recommendation = lazy(() => import('../../pages/Recommendation'));
const SearchResult = lazy(() => import('../../pages/SearchResult'));

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
        path: '/profile',
        element: <Profile />,
        children: [],
      },
      {
        path: '/:store/:slug',
        element: <ProductDetail />,
        children: [],
      },
      {
        path: '/merchant-register',
        element: <MerchantRegister />,
        children: [],
      },

      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/search',
        element: <SearchResult />,
      },
      {
        path: '/c/:category',
        element: <Category />,
      },
      {
        path: '/recommendation',
        element: <Recommendation />,
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
