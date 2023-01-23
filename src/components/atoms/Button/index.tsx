import React from 'react';
import { Button as AButton, ButtonProps } from 'antd';
import classNames from 'classnames';
import style from './index.module.scss';

const Button: React.FC<ButtonProps> = ({
  children = 'Button',
  onClick,
  className,
  ...props
}) => {
  const classProps = classNames(className, style.button);

  return (
    <AButton onClick={onClick} className={classProps} {...props}>
      {children}
    </AButton>
  );
};

export default Button;
