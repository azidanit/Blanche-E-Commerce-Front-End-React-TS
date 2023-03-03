import { message } from 'antd';
import React, { useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { setMerchant } from '../../../app/features/auth/authSlice';
import { useLazyGetMerchantProfileQuery } from '../../../app/features/merchant/merchantApiSlice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';

const MerchantProtectedPage = (): JSX.Element => {
  const location = useLocation();
  const { user, isLoggedIn } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  if (!user && !isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  const [getMerchantProfile, { isLoading }] = useLazyGetMerchantProfileQuery();
  const { merchant, isLoggedIn: isLoggedInMerchant } = useAppSelector(
    (state) => state.auth,
  );

  const fetchProfile = async () => {
    try {
      const result = await getMerchantProfile().unwrap();
      console.log(result);

      if (result) {
        dispatch(setMerchant(result));
      }
    } catch (err) {
      const error = err as Error;
      message.error(error.message);
    }
  };

  useEffect(() => {
    if (!isLoggedInMerchant || merchant) {
      return;
    }

    fetchProfile();
  }, [merchant]);

  if (!merchant && !isLoggedIn) {
    // TODO: redirect to login page
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default MerchantProtectedPage;
