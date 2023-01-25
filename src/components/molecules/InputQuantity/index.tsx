import { valueType } from 'antd/es/statistic/utils';
import React from 'react';
import { Button, InputNumber } from '../../atoms';

interface InputQuantityProps {
  value: number;
  handleChange: (value: valueType | null) => void;
  handleDecrement: () => void;
  handleIncrement: () => void;
}

const InputQuantity: React.FC<InputQuantityProps> = ({
  value,
  handleChange,
  handleDecrement,
  handleIncrement,
}) => {
  const addonIncrement = (
    <Button
      type="primary"
      shape="default"
      style={{ borderRadius: 0 }}
      onClick={handleIncrement}
    >
      +
    </Button>
  );
  const addonDecrement = (
    <Button
      type="primary"
      shape="default"
      style={{ borderRadius: 0 }}
      onClick={handleDecrement}
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
