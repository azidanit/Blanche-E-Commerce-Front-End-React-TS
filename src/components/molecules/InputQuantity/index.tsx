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
    <Button type="primary" onClick={increment} icon="plus" />
  );
  const addonDecrement = (
    <Button type="primary" onClick={decrement} icon="minus" />
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
