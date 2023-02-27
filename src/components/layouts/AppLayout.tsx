import React, { useEffect } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setParams } from '../../app/features/home/paramsSlice';
import { parseSearchParams } from '../../helpers/parseSearchParams';
import { Container, Nav } from '../molecules';
import {
  useLazyGetProfileQuery,
} from '../../app/features/profile/profileApiSlice';
import {  setUser } from '../../app/features/auth/authSlice';
import { message } from 'antd';

const AppLayout = (): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  const [getProfile, { isLoading }] = useLazyGetProfileQuery();
  const { user, isLoggedIn } = useAppSelector((state) => state.auth);

  const fetchProfile = async () => {
    try {
      const result = await getProfile().unwrap();
      console.log(result);

      if (result) {
        dispatch(setUser(result));
      }
    } catch (err) {
      const error = err as Error;
      message.error(error.message);
    }
  };

  useEffect(() => {
    if (!isLoggedIn || user) {
      return;
    }

    fetchProfile();
  }, [user]);

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
