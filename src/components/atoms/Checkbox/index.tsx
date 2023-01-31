import React from 'react';
import { Checkbox as ACheckbox, CheckboxProps } from 'antd';

const Checkbox: React.FC<CheckboxProps> = ({ ...props }) => {
  return <ACheckbox {...props} />;
};

export default Checkbox;
