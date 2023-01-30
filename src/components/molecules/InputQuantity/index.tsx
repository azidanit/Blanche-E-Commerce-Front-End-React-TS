import { valueType } from 'antd/es/statistic/utils';
import React from 'react';
import { Button, InputNumber } from '../../atoms';
import style from './index.module.scss';

interface InputQuantityProps {
  value: number;
  handleChange: (value: valueType | null) => void;
  handleDecrement: () => void;
  handleIncrement: () => void;
  disabledIncrement?: boolean;
  disableDecrement?: boolean;
}

const InputQuantity: React.FC<InputQuantityProps> = ({
  value,
  handleChange,
  handleDecrement,
  handleIncrement,
  disabledIncrement,
  disableDecrement,
}) => {
  const addonIncrement = (
    <Button
      shape="default"
      className={style.input__quantity__button}
      style={{ borderRadius: 0 }}
      onClick={handleIncrement}
      disabled={disabledIncrement}
    >
      +
    </Button>
  );
  const addonDecrement = (
    <Button
      shape="default"
      className={style.input__quantity__button}
      style={{ borderRadius: 0 }}
      onClick={handleDecrement}
      disabled={disableDecrement}
    >
      -
    </Button>
  );

  return (
    <InputNumber
      addonAfter={addonIncrement}
      addonBefore={addonDecrement}
      onChange={handleChange}
      defaultValue={100}
      value={value}
    />
  );
};

export default InputQuantity;
