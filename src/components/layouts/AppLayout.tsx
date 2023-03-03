import React, { useEffect } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setParams } from '../../app/features/home/paramsSlice';
import { parseSearchParams } from '../../helpers/parseSearchParams';
import { Container, Nav } from '../molecules';
import { useLazyGetProfileQuery } from '../../app/features/profile/profileApiSlice';
import { setUser } from '../../app/features/auth/authSlice';
import { message } from 'antd';
import { IErrorResponse } from '../../helpers/types/response.interface';
import { capitalizeFirstLetter } from '../../helpers/capitalizeFirstLetter';

const AppLayout = (): JSX.Element => {
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  const [getProfile, { isLoading }] = useLazyGetProfileQuery();
  const { user, isLoggedIn } = useAppSelector((state) => state.auth);

  const fetchProfile = async () => {
    try {
      const result = await getProfile().unwrap();

      if (result) {
        dispatch(setUser(result));
      }
    } catch (err) {
      const error = err as IErrorResponse;
      message.error(capitalizeFirstLetter(error.message));
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
