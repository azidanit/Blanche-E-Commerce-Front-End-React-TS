import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import Sidebar from '../../molecules/Sidebar';
import style from './index.module.scss';
import { Outlet } from 'react-router-dom';
import './override.scss';
import classNames from 'classnames';

const { Header, Sider, Content } = Layout;

const MerchantLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

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
