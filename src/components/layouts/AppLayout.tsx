import { Layout } from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom';
import useMediaQuery from '../../hooks/useMediaQuery';
import { Container, Nav } from '../molecules';

const AppLayout = (): JSX.Element => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <>
      <Nav />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default AppLayout;
