import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../../../../../app/features/auth/authApiSlice';
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

  const handleSubmit = async (values: RegisterSecondStepProps) => {
    try {
      const { username, password, fullname } = values;
      const body = {
        email,
        username,
        password: password.trim(),
        fullname,
      };
      await register(body);

      navigate(from, { replace: true });
    } catch (error) {
      setError(error as Error);
    }
  };

  return { handleSubmit, isLoading, error, isError };
};

export default useForm;
