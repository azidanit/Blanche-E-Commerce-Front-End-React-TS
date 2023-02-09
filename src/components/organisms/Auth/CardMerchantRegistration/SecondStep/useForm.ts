import { notification } from 'antd';
import { useState } from 'react';
import { useCreateMerchantMutation } from '../../../../../app/features/merchant/merchantApiSlice';
import {
  FormReturnAuth,
  ICreateMerchantRequest,
  IUserAddress,
  RegisterMerchantFirstStepProps,
} from '../../../../../helpers/types';

interface useFormProps {
  store: string;
  domain: string;
  address: IUserAddress | undefined;
  countDown: () => void;
}

const useForm = ({
  domain,
  store,
  address,
  countDown,
}: useFormProps): FormReturnAuth<ICreateMerchantRequest> => {
  const [error, setError] = useState<Error>();
  const [registerMerchant, { isLoading, isError }] =
    useCreateMerchantMutation();

  const handleSubmit = async (values: ICreateMerchantRequest) => {
    const body = {
      domain: domain,
      name: store,
      address_id: address?.id,
    };

    try {
      await registerMerchant(body).unwrap();
      notification.success({
        message: 'Success',
        description: 'Merchant has been created',
      });
      countDown();
    } catch (e) {
      setError(e as Error);
    }
  };

  return { handleSubmit, error, isLoading, isError };
};

export default useForm;
