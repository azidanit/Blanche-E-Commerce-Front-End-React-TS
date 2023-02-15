import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ProtectedPage from '../../components/layouts/Auth/ProtectedPage';
import AppLayout from '../../components/layouts/AppLayout';
import MerchantLayout from '../../components/layouts/Merchant/MerchantLayout';

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
const Checkout = lazy(() => import('../../pages/Checkout'));
const Transactions = lazy(() => import('../../pages/Transactions'));
const Wallet = lazy(() => import('../../pages/Wallet'));
const TransactionDetails = lazy(() => import('../../pages/TransactionDetails'));
const TopupWallet = lazy(() => import('../../pages/TopupWallet'));
const Order = lazy(() => import('../../pages/Merchant/Order'));
const TopupStatus = lazy(() => import('../../pages/TopupStatus'));
const Product = lazy(() => import('../../pages/Merchant/Product'));

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
            path: '/checkout',
            element: <Checkout />,
          },
          {
            path: '/wallet',
            element: <Wallet />,
          },
          {
            path: '/wallet/topup',
            element: <TopupWallet />,
          },
          {
            path: '/transactions',
            element: <Transactions />,
          },
          {
            path: '/transactions/:invoice',
            element: <TransactionDetails />,
          },
        ],
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
    element: <MerchantLayout />,
    children: [
      {
        path: '/merchant',
        element: <Order />,
      },
      {
        path: '/merchant/gege',
        element: <Product />,
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
  {
    path: '/wallet/topup/status',
    element: <TopupStatus />,
  },
]);
