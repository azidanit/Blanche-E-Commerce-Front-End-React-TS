import React from 'react';
import { Button as AButton, ButtonProps } from 'antd';
import classNames from 'classnames';
import style from './index.module.scss';

const Button: React.FC<ButtonProps> = ({
  children = 'Button',
  onClick,
  className: classProps,
  type,
}) => {
  const className = classNames(classProps, style.button);

  return (
    <AButton onClick={onClick} className={className} type={type}>
      {children}
    </AButton>
  );
};

export default Button;
