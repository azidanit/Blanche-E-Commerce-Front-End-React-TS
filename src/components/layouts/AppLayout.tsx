import React, { useEffect } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setParams } from '../../app/features/home/paramsSlice';
import { parseSearchParams } from '../../helpers/parseSearchParams';
import { Container, Nav } from '../molecules';
import { useGetProfileQuery } from '../../app/features/profile/profileApiSlice';
import { setIsLoggedIn, setUser } from '../../app/features/auth/authSlice';

const AppLayout = (): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  const { user, isLoggedIn } = useAppSelector((state) => state.auth);

  const { data: profile, isLoading } = useGetProfileQuery();

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }

    dispatch(setUser(profile));
    dispatch(setIsLoggedIn(localStorage.getItem('token') ? true : false));
  }, [profile, user]);

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
