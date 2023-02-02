import React, { useEffect } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { setSearch } from '../../app/features/home/paramsSlice';
import { useAppDispatch } from '../../app/hooks';
import useMediaQuery from '../../hooks/useMediaQuery';
import { Container, Nav } from '../molecules';

const AppLayout = (): JSX.Element => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setSearch(searchParams.get('q') || ''));
  }, [searchParams]);

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
