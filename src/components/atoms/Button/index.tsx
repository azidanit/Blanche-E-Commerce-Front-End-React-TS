import React from 'react';
import { Button as AButton, ButtonProps } from 'antd';
import classNames from 'classnames';

const Button: React.FC<ButtonProps> = ({
  children = 'Button',
  onClick,
  ...props
}) => {
  return (
    <AButton onClick={onClick} {...props}>
      {children}
    </AButton>
  );
};

export default Button;
