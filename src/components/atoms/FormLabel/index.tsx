import { Form, FormItemProps } from 'antd';
import classNames from 'classnames';
import React from 'react';
import style from './index.module.scss';

const FormLabel: React.FC<FormItemProps> = ({
  label,
  className,
  children,
  ...props
}) => {
  const classProps = classNames(className, style.label);
  return (
    <Form.Item
      label={
        label && (
          <label className={classProps} style={{ fontSize: 18 }}>
            {label}
          </label>
        )
      }
      {...props}
    >
      {children}
    </Form.Item>
  );
};

export default FormLabel;
