import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ProtectedPage from '../../components/layouts/Auth/ProtectedPage';
import AppLayout from '../../components/layouts/AppLayout';

const Home = lazy(() => import('../../pages/Home'));
const Login = lazy(() => import('../../pages/Auth/Login'));
const ProductDetail = lazy(() => import('../../pages/Product'));
const Register = lazy(() => import('../../pages/Auth/Register'));
const MerchantRegister = lazy(
  () => import('../../pages/Auth/MerchantRegister'),
);
const Seller = lazy(() => import('../../pages/Seller'));
const Cart = lazy(() => import('../../pages/Cart'));
const Profile = lazy(() => import('../../pages/Profile'));
const Category = lazy(() => import('../../pages/Category'));
const Recommendation = lazy(() => import('../../pages/Recommendation'));
const SearchResult = lazy(() => import('../../pages/SearchResult'));
const Transactions = lazy(() => import('../../pages/Transactions'));
const Wallet = lazy(() => import('../../pages/Wallet'));
const TransactionDetails = lazy(() => import('../../pages/TransactionDetails'));

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        element: <ProtectedPage />,
        children: [
          {
            path: '/profile',
            element: <Profile />,
          },
          {
            path: '/merchant-register',
            element: <MerchantRegister />,
          },

          {
            path: '/cart',
            element: <Cart />,
          },
          {
            path: '/wallet',
            element: <Wallet />,
          },
        ],
      },
      {
        path: '/transactions',
        element: <Transactions />,
      },
      {
        path: '/transactions/:id',
        element: <TransactionDetails />,
      },
      {
        path: '',
        element: <Home />,
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
        path: '/:store',
        element: <Seller />,
        children: [],
      },
      {
        path: '/:store/products',
        element: <Seller />,
        children: [],
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
  },
  {
    path: '/register',
    element: <Register />,
  },
]);
