import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import Sidebar from '../../molecules/Sidebar';
import style from './index.module.scss';
import { Outlet } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const MerchantLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className={style.merchant__layout}>
      <Sidebar collapsed={collapsed} />
      <Layout className="site-layout">
        <Header
          style={{ padding: 0, background: colorBgContainer }}
          className={style.merchant__layout__header}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            },
          )}
        </Header>
        <Content
          className={style.merchant__layout__content}
          style={{
            margin: '24px 16px',
            padding: 24,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MerchantLayout;
