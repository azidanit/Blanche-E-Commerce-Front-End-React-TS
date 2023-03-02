import React, { useEffect, useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, message } from 'antd';
import Sidebar from '../../molecules/Sidebar';
import style from './index.module.scss';
import {
  Navigate,
  Outlet,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import './override.scss';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { parseSearchParams } from '../../../helpers/parseSearchParams';
import { setParams } from '../../../app/features/home/paramsSlice';
import { useLazyGetMerchantProfileQuery } from '../../../app/features/merchant/merchantApiSlice';
import { setMerchant } from '../../../app/features/auth/authSlice';

const { Header, Sider, Content } = Layout;

const MerchantLayout: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useAppDispatch();
  const [collapsed, setCollapsed] = useState(false);

  const [getMerchantProfile, { isLoading }] = useLazyGetMerchantProfileQuery();
  const { merchant, isLoggedIn } = useAppSelector((state) => state.auth);

  const fetchProfile = async () => {
    try {
      const result = await getMerchantProfile().unwrap();
      console.log(result);

      if (result) {
        dispatch(setMerchant(result));
      }
    } catch (err) {
      const error = err as Error;
      message.error(error.message);
    }
  };

  useEffect(() => {
    if (!isLoggedIn || merchant) {
      return;
    }

    fetchProfile();
  }, [merchant]);

  useEffect(() => {
    dispatch(setParams(parseSearchParams(searchParams)));
  }, [searchParams]);

  if (!merchant && !isLoggedIn) {
    // TODO: redirect to login page
    return <Navigate to="/login" replace />;
  }

  return (
    <Layout className={style.merchant__layout}>
      <Sidebar collapsed={collapsed} />
      <Layout
        className={classNames(
          'merchant__layout',
          style.merchant__layout__container,
        )}
      >
        <Header className={style.merchant__layout__header}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            },
          )}
        </Header>
        <Content className={style.merchant__layout__content}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MerchantLayout;
