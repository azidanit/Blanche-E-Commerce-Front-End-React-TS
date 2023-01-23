import React from 'react';
import { Button as AButton } from 'antd';
import classNames from 'classnames';
import style from './index.module.scss';
import { BaseButtonProps } from 'antd/es/button/button';

type ButtonProps = BaseButtonProps & {
  onClick: () => void;
  classProps?: string;
};

const Button: React.FC<ButtonProps> = ({
  children = 'Button',
  onClick,
  classProps,
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
