import { message } from 'antd';
import { useState } from 'react';
import { useCreateMerchantMutation } from '../../../../../app/features/merchant/merchantApiSlice';
import {
  FormReturnAuth,
  ICreateMerchantRequest,
  IUserAddress,
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

  const handleSubmit = async () => {
    if (!address) {
      message.error('Please select your address');
      return;
    }

    const body = {
      domain: domain,
      name: store,
      address_id: address?.id,
    };

    try {
      await registerMerchant(body).unwrap();
      message.success('Merchant has been created');
      countDown();
    } catch (e) {
      setError(e as Error);
    }
  };

  return { handleSubmit, error, isLoading, isError };
};

export default useForm;
