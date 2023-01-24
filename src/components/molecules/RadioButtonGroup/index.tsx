import { Radio } from 'antd';
import { RadioGroupContextProps } from 'antd/es/radio';
import { RadioButtonProps } from 'antd/es/radio/radioButton';
import React from 'react';
import { RadioButton } from '../../atoms';

type RadioButtonCompoProps = RadioGroupContextProps &
  RadioButtonProps & {
    values: string[];
  };

const RadioButtonGroup: React.FC<RadioButtonCompoProps> = ({
  values,
  ...props
}) => {
  return (
    <Radio.Group {...props}>
      {values.map((item) => (
        <RadioButton key={item} value={item} />
      ))}
    </Radio.Group>
  );
};

export default RadioButtonGroup;
