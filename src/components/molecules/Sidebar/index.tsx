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
import { Link } from 'react-router-dom';

interface SidebarProps {
  collapsed: boolean;
}

const items = [
  {
    key: '1',
    icon: <UserOutlined />,
    label: <Link to="/merchant">nav 1</Link>,
  },
  {
    key: '2',
    icon: <VideoCameraOutlined />,
    label: <Link to="/merchant/gege">nav 2</Link>,
  },
  {
    key: '3',
    icon: <UploadOutlined />,
    label: <Link to="/merchant/shipping">nav 3</Link>,
  },
];
const { Sider } = Layout;

const Sidebar: React.FC<SidebarProps> = ({ collapsed }) => {
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
        defaultSelectedKeys={['1']}
        items={items}
      />
    </Sider>
  );
};

export default Sidebar;