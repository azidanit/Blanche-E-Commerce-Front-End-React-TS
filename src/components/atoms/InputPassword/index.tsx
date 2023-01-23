import React from 'react';
import { Input as AInput, InputProps } from 'antd';

const InputPassword: React.FC<InputProps> = ({ className, size, ...props }) => {
  return <AInput.Password size="large" {...props} />;
};

export default InputPassword;
