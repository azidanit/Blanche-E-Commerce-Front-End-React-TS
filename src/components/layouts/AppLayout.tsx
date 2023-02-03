import React, { useEffect } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setParams } from '../../app/features/home/paramsSlice';
import { parseSearchParams } from '../../helpers/parseSearchParams';
import { Container, Nav } from '../molecules';
import { useGetProfileQuery } from '../../app/features/profile/profileApiSlice';
import { setIsLoggedIn, setUser } from '../../app/features/auth/authSlice';
import { skipToken } from '@reduxjs/toolkit/dist/query';

const AppLayout = (): JSX.Element => {
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state) => state.auth);

  const { data: profile, isLoading, isSuccess } = useGetProfileQuery();

  useEffect(() => {
    dispatch(setUser(profile));
    dispatch(setIsLoggedIn(true));
  }, [profile]);

  useEffect(() => {});

  useEffect(() => {
    dispatch(setParams(parseSearchParams(searchParams)));
  }, [searchParams]);

  if (isLoading) {
    return <>...loading</>;
  }

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
