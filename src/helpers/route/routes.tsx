import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Register from '../../pages/Auth/Register';

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
    path: 'product/:store/:slug',
    element: <ProductDetail />,
    children: [],
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
