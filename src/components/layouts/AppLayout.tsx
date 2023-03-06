import React, { useEffect, useState } from 'react';
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
  const [isMerchant, setIsMerchant] = useState(false);
  const dispatch = useAppDispatch();

  const { isLoggedIn, user, merchant } = useAppSelector((state) => state.auth);

  const { data: result, isLoading } = useGetProfileQuery(undefined, {
    skip: !isLoggedIn || (isLoggedIn && !user),
  });
  const { data: resultMerchant, isLoading: isLoadingMerchant } =
    useGetMerchantProfileQuery(undefined, {
      skip:
        result?.role !== 'merchant' ||
        (result?.role !== 'merchant' && !isLoggedIn) ||
        (result?.role !== 'merchant' && isLoggedIn && !merchant),
    });

  useEffect(() => {
    if (!result) return;
    dispatch(setUser(result));
    if (result.role === 'merchant') {
      setIsMerchant(true);
    }
  }, [result, isLoggedIn, user, merchant]);

  useEffect(() => {
    if (!isMerchant) return;
    dispatch(setMerchant(resultMerchant));
  }, [isMerchant]);

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
