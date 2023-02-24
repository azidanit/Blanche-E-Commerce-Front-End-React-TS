import { message } from 'antd';
import React, { useState } from 'react';
import { useConfirmChangePinMutation } from '../../../../app/features/wallet/walletApiSlice';
import { IErrorResponse } from '../../../../helpers/types/response.interface';
import { Button, InputPassword } from '../../../atoms';
import style from './index.module.scss';

interface ConfirmPasswordProps {
  handleNext: () => void;
}

const ConfirmPassword: React.FC<ConfirmPasswordProps> = ({ handleNext }) => {
  const [password, setPassword] = useState('');
  const [confirm, { isLoading }] = useConfirmChangePinMutation();

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const body = {
        password,
      };
      await confirm(body).unwrap();
      message.success('Success confirm password. Please input your new PIN.');
      handleNext();
    } catch (err) {
      const error = err as IErrorResponse;
      message.error(error.message);
    }
  };

  return (
    <div className={style.cp}>
      <h1 className={style.cp__title}>Confirm Password</h1>
      <p className={style.cp__info}>
        Please confirm your password to continue to change pin.
      </p>
      <InputPassword
        placeholder="Please input your password"
        className={style.cp__input}
        value={password}
        onChange={handleChangePassword}
      />
      <Button
        type="primary"
        block
        className={style.cp__button}
        onClick={handleSubmit}
        loading={isLoading}
      >
        Confirm
      </Button>
    </div>
  );
};

export default ConfirmPassword;
