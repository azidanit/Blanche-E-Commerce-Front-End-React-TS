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

interface SidebarProps {
  collapsed: boolean;
}

const items = [
  {
    key: '1',
    icon: <UserOutlined />,
    label: 'nav 1',
  },
  {
    key: '2',
    icon: <VideoCameraOutlined />,
    label: 'nav 2',
  },
  {
    key: '3',
    icon: <UploadOutlined />,
    label: 'nav 3',
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
