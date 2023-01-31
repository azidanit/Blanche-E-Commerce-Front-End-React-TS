import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../app/hooks';
import { EditProfileProps, FormReturnAuth } from '../../../../helpers/types';

function useForm(): FormReturnAuth<EditProfileProps> {
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [error, setError] = useState<Error>();

  const handleSubmit = async (values: EditProfileProps) => {
    try {
      navigate(from, { replace: true });
    } catch (error) {
      setError(error as Error);
    }
  };

  return { handleSubmit, error };
}

export default useForm;
