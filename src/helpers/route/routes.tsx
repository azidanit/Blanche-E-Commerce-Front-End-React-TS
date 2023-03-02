import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ProtectedPage from '../../components/layouts/Auth/ProtectedPage';
import AppLayout from '../../components/layouts/AppLayout';
import MerchantLayout from '../../components/layouts/Merchant/MerchantLayout';
import { SetNewPassword } from '../../components';

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
const FavoriteProduct = lazy(() => import('../../pages/FavoriteProduct'));
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
const AddProduct = lazy(
  () => import('../../pages/Merchant/Product/AddProduct'),
);
const PaymentStatus = lazy(() => import('../../pages/PaymentStatus'));
const Shipping = lazy(() => import('../../pages/Merchant/Shipping'));
const OrderDetail = lazy(() => import('../../pages/Merchant/OrderDetail'));
const ProductList = lazy(
  () => import('../../pages/Merchant/Product/ProductList'),
);
const Voucher = lazy(() => import('../../pages/Merchant/Voucher/VoucherList'));
const AddVoucher = lazy(
  () => import('../../pages/Merchant/Voucher/AddVoucher'),
);

const Promotion = lazy(
  () => import('../../pages/Merchant/Promotion/PromotionList'),
);
const AddPromotion = lazy(
  () => import('../../pages/Merchant/Promotion/AddPromotion'),
);
const ChangePassword = lazy(() => import('../../pages/ChangePassword'));
const WalletPayment = lazy(() => import('../../pages/WalletPayment'));
const EditVoucher = lazy(
  () => import('../../pages/Merchant/Voucher/EditVoucher'),
);
const DuplicateVoucher = lazy(
  () => import('../../pages/Merchant/Voucher/DuplicateVoucher'),
);
const Address = lazy(() => import('../../pages/Merchant/Address'));
const ChangePin = lazy(() => import('../../pages/ChangePin'));
const ForgetPassword = lazy(() => import('../../pages/ForgetPassword'));
const SellerFund = lazy(() => import('../../pages/SellerFund'));
const Withdraw = lazy(() => import('../../pages/Withdraw'));
const Dashboard = lazy(() => import('../../pages/Dashboard'));

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
            path: '/favorite-products',
            element: <FavoriteProduct />,
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
          {
            path: '/profile/change-password',
            element: <ChangePassword />,
          },
          {
            path: '/wallet/change-pin',
            element: <ChangePin />,
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
        path: '/merchant/orders',
        element: <Order />,
      },
      {
        path: '/merchant/orders/:invoice',
        element: <OrderDetail />,
      },
      {
        path: '/merchant/vouchers',
        element: <Voucher />,
        children: [],
      },
      {
        path: '/merchant/vouchers/edit/:code',
        element: <EditVoucher />,
        children: [],
      },
      {
        path: '/merchant/vouchers/copy/:code',
        element: <DuplicateVoucher />,
        children: [],
      },
      {
        path: '/merchant/vouchers/create',
        element: <AddVoucher />,
      },
      {
        path: '/merchant/promotions',
        element: <Promotion />,
        children: [],
      },
      {
        path: '/merchant/promotions/create',
        element: <AddPromotion />,
      },

      {
        path: '/order/:invoice',
        element: <OrderDetail />,
      },
      {
        path: '/merchant/products/create',
        element: <AddProduct />,
      },
      {
        path: '/merchant/products/edit/:id',
        element: <AddProduct />,
      },
      {
        path: '/merchant/products',
        element: <ProductList />,
      },
      {
        path: '/merchant/shipping',
        element: <Shipping />,
      },
      {
        path: '/merchant/address',
        element: <Address />,
      },
      {
        path: '/merchant/payment',
        element: <SellerFund />,
      },
      {
        path: '/merchant/payment/withdraw',
        element: <Withdraw />,
      },
      {
        path: '/merchant',
        element: <Dashboard />,
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
  {
    path: '/transactions/:order_code/payment-status',
    element: <PaymentStatus />,
  },
  {
    path: '/payment/wallet',
    element: <WalletPayment />,
  },
  {
    path: '/transactions/:order_code/payment-status',
    element: <PaymentStatus />,
  },
  {
    path: '/reset-password',
    element: <ForgetPassword />,
  },
  {
    path: '/reset-password/:code',
    element: <SetNewPassword />,
  },
]);
