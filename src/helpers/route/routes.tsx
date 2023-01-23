import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Home = lazy(() => import('../../pages/Home'));
const Login = lazy(() => import('../../pages/Auth/Login'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [],
  },
  {
    path: '/login',
    element: <Login />,
    children: [],
  },
]);
