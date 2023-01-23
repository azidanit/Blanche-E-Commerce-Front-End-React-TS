import React from 'react';
import { Button as AButton, ButtonProps } from 'antd';
import classNames from 'classnames';
import style from './index.module.scss';

const Button: React.FC<ButtonProps> = ({
  children = 'Button',
  onClick,
  className,
  size,
  ...props
}) => {
  const getSize = () => {
    if (size === 'large') {
      return { className: style.large };
    }

    if (size === 'middle') {
      return { className: style.middle };
    }

    if (size === 'small') {
      return { className: style.small };
    }
  };

  const classProps = classNames(className, style.button, getSize()?.className);

  return (
    <AButton onClick={onClick} className={classProps} {...props}>
      {children}
    </AButton>
  );
};

export default Button;
