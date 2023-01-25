import { useState } from 'react';
import { useCheckEmailMutation } from '../../../../../app/features/auth/authApiSlice';
import { setEmail } from '../../../../../app/features/auth/registerSlice';
import { useAppDispatch } from '../../../../../app/hooks';
import {
  FormReturnAuth,
  RegisterFirstStepProps,
} from '../../../../../helpers/types';

interface useFormProps {
  onNext: (newEmail: string) => void;
}

const useForm = ({
  onNext,
}: useFormProps): FormReturnAuth<RegisterFirstStepProps> => {
  const [error, setError] = useState<Error>();
  const [checkEmail, { isLoading }] = useCheckEmailMutation();
  const dispatch = useAppDispatch();

  const handleSubmit = async (values: RegisterFirstStepProps) => {
    try {
      const { email } = values;
      const body = {
        email,
      };
      const data = await checkEmail(body).unwrap();
      if (!data.is_available) {
        throw new Error('Email is already used.');
      }
      dispatch(setEmail(data.email));
      onNext(data.email);
    } catch (error) {
      setError(error as Error);
    }
  };

  return { handleSubmit, error, isLoading };
};

export default useForm;
