import React, { useState } from 'react';
import { Button, FormLabel, Input, InputPassword } from '../../../../atoms';
import { Form } from '../../../../molecules';
import useForm from './useForm';
import { dependencies, rules } from './validation';
import debounce from 'lodash/debounce';
import { useCheckUsernameMutation } from '../../../../../app/features/auth/authApiSlice';
import { ValidateStatus } from 'antd/es/form/FormItem';
import { capitalizeFirstLetter } from '../../../../../helpers/capitalizeFirstLetter';
import { Alert } from 'antd';
import style from '../index.module.scss';

interface SecondStepProps {
  email: string;
}

const SecondStep: React.FC<SecondStepProps> = ({ email }) => {
  const { handleSubmit, isError, error } = useForm({ email });
  const [username, setUsername] = useState<{
    value: string;
    validateStatus?: ValidateStatus;
    errorMsg?: string | null;
  }>({ value: '' });
  const [checkUsername, { isLoading }] = useCheckUsernameMutation();

  const validateUsername = async (
    username: string,
  ): Promise<{
    validateStatus?: ValidateStatus;
    errorMsg?: string | null;
  }> => {
    if (!username) {
      return {
        validateStatus: 'error',
        errorMsg: 'Please enter your username!',
      };
    }

    if (username.length <= 8) {
      return {
        validateStatus: 'error',
        errorMsg: 'Username must be at least 8 characters long.',
      };
    }

    if (username.length >= 16) {
      return {
        validateStatus: 'error',
        errorMsg: 'Username must be at most 16 characters long.',
      };
    }

    if (username.length < 3) {
      return {
        validateStatus: 'error',
        errorMsg: 'Username is too short (Minimum 3 characters needed.)',
      };
    }
    const body = {
      username,
    };
    const data = await checkUsername(body).unwrap();
    if (!data.is_available) {
      return {
        validateStatus: 'error',
        errorMsg: 'Username is already taken.',
      };
    }
    return {
      validateStatus: 'success',
      errorMsg: null,
    };
  };

  const handleChangeUsername = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = e.target;
    setUsername({
      validateStatus: 'validating',
      errorMsg: null,
      value,
    });
    const result = await validateUsername(value);
    setUsername({
      ...result,
      value,
    });
  };

  return (
    <Form
      name="basic"
      layout="vertical"
      initialValues={{ remember: true }}
      onFinish={handleSubmit}
      autoComplete="off"
    >
      <FormLabel
        label="Username"
        name="username"
        validateStatus={username.validateStatus}
        help={username.errorMsg || ''}
        hasFeedback
        required
      >
        <Input
          placeholder="Username"
          onChange={debounce(handleChangeUsername, 500)}
        />
      </FormLabel>
      <FormLabel label="Fullname" name="fullname" rules={rules.fullname}>
        <Input placeholder="Fullname" />
      </FormLabel>
      <FormLabel
        label="Password"
        name="password"
        rules={rules.password}
        hasFeedback
      >
        <InputPassword placeholder="Password" />
      </FormLabel>
      <FormLabel
        label="Confirm Passsword"
        name="confirmPassword"
        rules={rules.confirmPassword}
        dependencies={dependencies.confirmPassword}
        hasFeedback
      >
        <InputPassword placeholder="Confirm Password" />
      </FormLabel>
      {(error || isError) && (
        <Alert
          message={capitalizeFirstLetter(error?.message)}
          type="error"
          showIcon
          className={style.card__register__alert}
        />
      )}
      <Button
        type="primary"
        size="large"
        htmlType="submit"
        block
        loading={isLoading}
        disabled={isLoading}
        className={style.card__register__button}
      >
        Done
      </Button>
    </Form>
  );
};

export default SecondStep;
