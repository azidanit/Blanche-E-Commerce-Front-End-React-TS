import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Home = lazy(() => import('../../pages/Home'));
const Login = lazy(() => import('../../pages/Auth/Login'));
const ProductDetail = lazy(() => import('../../pages/Product'));

export const router = createBrowserRouter([
  {
    path: '',
    element: <Home />,
    children: [],
  },
  {
    path: 'product-detail',
    element: <ProductDetail />,
    children: [],
  },
  {
    path: '/login',
    element: <Login />,
    children: [],
  },
]);
