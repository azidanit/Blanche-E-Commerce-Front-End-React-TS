import { Radio } from 'antd';
import { RadioButtonProps } from 'antd/es/radio/radioButton';
import React from 'react';

const RadioButton: React.FC<RadioButtonProps> = ({ ...props }) => {
  return <Radio.Button {...props} />;
};

export default RadioButton;
