import { useState } from 'react';
import { usePatchProfileDetailsMutation } from '../../../../app/features/profile/profileApiSlice';
import { EditDetailsProps, FormReturnAuth } from '../../../../helpers/types';

interface useFormProps {
  handleOk: () => void;
}

function useForm({ handleOk }: useFormProps): FormReturnAuth<EditDetailsProps> {
  const [error, setError] = useState<Error>();
  const [patch, { isError, isLoading }] = usePatchProfileDetailsMutation();

  const handleSubmit = async (values: EditDetailsProps) => {
    try {
      const formData = new FormData();
      for (const [key, value] of Object.entries(values)) {
        formData.append(key, value);
      }
      await patch(formData).unwrap();
      handleOk();
    } catch (error) {
      setError(error as Error);
    }
  };

  return { handleSubmit, error, isError, isLoading };
}

export default useForm;
