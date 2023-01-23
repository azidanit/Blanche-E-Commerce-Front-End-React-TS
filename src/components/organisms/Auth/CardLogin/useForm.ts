import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  ErrorLogin,
  FormReturnLogin,
  LoginProps,
} from '../../../../helpers/types';

// import service register integration

function useForm(): FormReturnLogin<LoginProps> {
  const [values, setValues] = useState<LoginProps>({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<ErrorLogin>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();

  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    const data = {
      email: values.email,
      password: values.password,
    };

    if (
      Object.keys(errors?.email || {}).length === 0 &&
      Object.keys(errors?.password || {}).length === 0 &&
      isSubmitting
    ) {
      console.log('hahha');
    }
  };

  return { handleChange, handleSubmit, values, errors };
}

export default useForm;
