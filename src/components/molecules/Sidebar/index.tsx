import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import React from 'react';
import { Menu } from '../..';
import style from './index.module.scss';
import { Logo, LogoIcon } from '../../atoms';
import { Layout } from 'antd';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  collapsed: boolean;
}

const items = [
  {
    key: '',
    icon: <UserOutlined />,
    label: <Link to="/merchant">Dashboard</Link>,
  },
  {
    key: 'orders',
    icon: <UserOutlined />,
    label: <Link to="/merchant/orders">Orders</Link>,
  },
  {
    key: 'products',
    icon: <VideoCameraOutlined />,
    label: <Link to="/merchant/products">Products</Link>,
  },
  {
    key: 'shipping',
    icon: <UploadOutlined />,
    label: <Link to="/merchant/shipping">Shipping</Link>,
  },
  {
    key: 'vouchers',
    icon: <UploadOutlined />,
    label: <Link to="/merchant/vouchers">Vouchers</Link>,
  },
  {
    key: 'promotions',
    icon: <UploadOutlined />,
    label: <Link to="/merchant/promotions">Promotions</Link>,
  },
  {
    key: 'address',
    icon: <UploadOutlined />,
    label: <Link to="/merchant/address">Address</Link>,
  },
  {
    key: 'profile',
    icon: <UploadOutlined />,
    label: <Link to="/merchant/profile">Profile</Link>,
  },
];
const { Sider } = Layout;

const Sidebar: React.FC<SidebarProps> = ({ collapsed }) => {
  const location = useLocation();
  const lastPath = location.pathname.split('/').pop();
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      className={style.sidebar}
      width={300}
    >
      {collapsed ? (
        <LogoIcon className={style.sidebar__logo} size="small" />
      ) : (
        <Logo className={style.sidebar__logo} size="extrasmall" />
      )}
      <Menu
        theme="light"
        className={style.sidebar__menu}
        defaultSelectedKeys={lastPath ? [lastPath] : ['']}
        items={items}
      />
    </Sider>
  );
};

export default Sidebar;
