import React from 'react';
import { Button, InputNumber } from '../../atoms';

interface InputQuantityProps {
  value: number;
}

const InputQuantity: React.FC<InputQuantityProps> = ({ value }) => {
  const decrement = () => {
    value = value - 1;
  };

  const increment = () => {
    value = value + 1;
  };

  const addonIncrement = (
    <Button
      type="primary"
      shape="default"
      style={{ borderRadius: 0 }}
      onClick={increment}
    >
      +
    </Button>
  );
  const addonDecrement = (
    <Button
      type="primary"
      shape="default"
      style={{ borderRadius: 0 }}
      onClick={decrement}
    >
      -
    </Button>
  );

  return (
    <InputNumber
      addonAfter={addonIncrement}
      addonBefore={addonDecrement}
      defaultValue={100}
      value={value}
    />
  );
};

export default InputQuantity;
