import React from 'react';
import { Input as AInput, InputProps } from 'antd';

const Input: React.FC<InputProps> = (props) => {
  return <AInput size="large" {...props} />;
};

export default Input;
