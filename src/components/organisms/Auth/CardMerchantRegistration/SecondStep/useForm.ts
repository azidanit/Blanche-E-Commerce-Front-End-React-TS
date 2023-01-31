import { useState } from 'react';
import { useCheckEmailMutation } from '../../../../../app/features/auth/authApiSlice';
import { useAppDispatch } from '../../../../../app/hooks';
import {
  FormReturnAuth,
  RegisterFirstStepProps,
  RegisterMerchantFirstStepProps,
} from '../../../../../helpers/types';

interface useFormProps {
  handleNext: () => void;
}

const useForm = ({
  handleNext,
}: useFormProps): FormReturnAuth<RegisterMerchantFirstStepProps> => {
  const [error, setError] = useState<Error>();
  const [values, setValues] = useState<RegisterMerchantFirstStepProps>({
    store: '',
    domain: '',
  });
  const dispatch = useAppDispatch();

  const handleSubmit = async (values: RegisterMerchantFirstStepProps) => {
    setValues(values);
    handleNext();
  };

  return { handleSubmit, error, values };
};

export default useForm;
