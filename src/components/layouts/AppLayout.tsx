import React, { useEffect } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setParams } from '../../app/features/home/paramsSlice';
import { parseSearchParams } from '../../helpers/parseSearchParams';
import { Container, Nav } from '../molecules';
import { useGetProfileQuery } from '../../app/features/profile/profileApiSlice';
import { setMerchant, setUser } from '../../app/features/auth/authSlice';
import { useGetMerchantProfileQuery } from '../../app/features/merchant/merchantApiSlice';

const AppLayout = (): JSX.Element => {
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  const { isLoggedIn, user, merchant } = useAppSelector((state) => state.auth);

  const { data: result, isLoading } = useGetProfileQuery(undefined, {
    skip: !isLoggedIn || (!isLoggedIn && !user),
  });

  const { data: resultMerchant, isLoading: isLoadingMerchant } =
    useGetMerchantProfileQuery(undefined, {
      skip: user?.role !== 'merchant',
    });

  useEffect(() => {
    if (!result) return;
    dispatch(setUser(result));
    if (result.role === 'merchant') {
      dispatch(setMerchant(resultMerchant));
    }
  }, [result, isLoggedIn, user, merchant]);

  useEffect(() => {
    if (!resultMerchant || user?.role !== 'merchant') return;
    dispatch(setMerchant(resultMerchant));
  }, [resultMerchant, isLoggedIn, user, merchant]);

  useEffect(() => {
    dispatch(setParams(parseSearchParams(searchParams)));
  }, [searchParams]);

  if (isLoading || isLoadingMerchant) {
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
