import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../../../../../app/features/auth/authApiSlice';
import {
  setIsLoggedIn,
  setUser,
} from '../../../../../app/features/auth/authSlice';
import { useGetProfileQuery } from '../../../../../app/features/profile/profileApiSlice';
import { useAppDispatch } from '../../../../../app/hooks';
import {
  FormReturnAuth,
  RegisterSecondStepProps,
} from '../../../../../helpers/types';

interface useFormProps {
  email: string;
}

const useForm = ({
  email,
}: useFormProps): FormReturnAuth<RegisterSecondStepProps> => {
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const navigate = useNavigate();
  const [error, setError] = useState<Error>();
  const [register, { isLoading, isError }] = useRegisterMutation();

  const dispatch = useAppDispatch();

  const handleSubmit = async (values: RegisterSecondStepProps) => {
    try {
      const { username, password, fullname } = values;
      const body = {
        email,
        username,
        password: password.trim(),
        fullname,
      };
      await register(body)
        .unwrap()
        .then(() => {
          const { data: profile } = useGetProfileQuery();

          dispatch(setUser(profile));

          dispatch(setIsLoggedIn(true));
        });
      navigate(from, { replace: true });
    } catch (error) {
      setError(error as Error);
    }
  };

  return { handleSubmit, isLoading, error, isError };
};

export default useForm;
