import React, { useEffect } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setParams } from '../../app/features/home/paramsSlice';
import { parseSearchParams } from '../../helpers/parseSearchParams';
import { Container, Nav } from '../molecules';
import { useLazyGetProfileQuery } from '../../app/features/profile/profileApiSlice';
import { setMerchant, setUser } from '../../app/features/auth/authSlice';
import { message } from 'antd';
import { useLazyGetMerchantProfileQuery } from '../../app/features/merchant/merchantApiSlice';
import { IErrorResponse } from '../../helpers/types/response.interface';
import { capitalizeFirstLetter } from '../../helpers/capitalizeFirstLetter';

const AppLayout = (): JSX.Element => {
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  const [getProfile, { isLoading }] = useLazyGetProfileQuery();

  const [getMerchantProfile] = useLazyGetMerchantProfileQuery();
  const { user, isLoggedIn, merchant } = useAppSelector((state) => state.auth);

  const fetchProfile = async () => {
    try {
      const result = await getProfile().unwrap();

      if (result) {
        dispatch(setUser(result));

        if (result.role == 'merchant') {
          const merchant = await getMerchantProfile().unwrap();
          dispatch(setMerchant(merchant));
        }
      }
    } catch (err) {
      const error = err as IErrorResponse;
      message.error(capitalizeFirstLetter(error.message));
    }
  };

  const fetchMerchantProfile = async () => {
    if (!user || user.role !== 'merchant') return;
    try {
      const merchant = await getMerchantProfile().unwrap();
      dispatch(setMerchant(merchant));
    } catch (err) {
      const error = err as Error;
      message.error(capitalizeFirstLetter(error.message));
    }
  };

  useEffect(() => {
    if (isLoggedIn && !user) {
      fetchProfile();
      return;
    }

    if (isLoggedIn && !merchant) {
      fetchMerchantProfile();
      return;
    }
  }, [user, merchant, isLoggedIn]);

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
