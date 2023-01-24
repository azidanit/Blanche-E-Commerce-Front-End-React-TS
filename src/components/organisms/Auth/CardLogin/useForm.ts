import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { FormReturnLogin, LoginProps } from '../../../../helpers/types';

function useForm(): FormReturnLogin<LoginProps> {
  const dispatch = useDispatch();

  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const navigate = useNavigate();

  const handleSubmit = (values: LoginProps) => {
    const data = {
      email: values.email,
      password: values.password.trim(),
    };

    //TODO - dispatch login

    console.log(values);
  };

  return { handleSubmit };
}

export default useForm;
