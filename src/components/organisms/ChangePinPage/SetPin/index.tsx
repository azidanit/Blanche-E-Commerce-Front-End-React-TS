import { message } from 'antd';
import React, { useState } from 'react';
import { PinInput } from 'react-input-pin-code';
import { useNavigate } from 'react-router';
import { useSetNewPinMutation } from '../../../../app/features/wallet/walletApiSlice';
import { capitalizeFirstLetter } from '../../../../helpers/capitalizeFirstLetter';
import { IErrorResponse } from '../../../../helpers/types/response.interface';
import { Button } from '../../../atoms';
import style from './index.module.scss';

const initialPin = ['', '', '', '', '', ''];

const SetPin: React.FC = () => {
  const [pin, setPin] = useState(initialPin);
  const [setNewPin, { isLoading }] = useSetNewPinMutation();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const body = {
        pin: pin.join(''),
      };
      await setNewPin(body).unwrap();
      navigate('/wallet');
    } catch (err) {
      const error = err as IErrorResponse;
      message.error(capitalizeFirstLetter(error.message));
    }
  };

  return (
    <div className={style.sp}>
      <h1 className={style.sp__title}>Set PIN</h1>
      <p className={style.sp__info}>
        Please set your PIN to secure your account.
      </p>
      <PinInput
        values={pin}
        onChange={(value, index, values) => setPin(values)}
        inputClassName={style.sp__input}
        containerClassName={style.sp__container}
        mask
        showState={false}
        placeholder=""
        type="number"
      />
      <Button
        type="primary"
        block
        className={style.sp__button}
        onClick={handleSubmit}
        loading={isLoading}
      >
        Confirm
      </Button>
    </div>
  );
};

export default SetPin;
