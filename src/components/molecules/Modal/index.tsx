import { Modal as AModal, ModalProps } from 'antd';
import classNames from 'classnames';
import React from 'react';
import { Button } from '../../atoms';
import style from './index.module.scss';

type AModalProps = ModalProps & {
  onOk?: () => void;
  onCancel?: () => void;
};

const Modal: React.FC<AModalProps> = ({
  children,
  className,
  onOk,
  onCancel,
  okText = 'OK',
  cancelText = 'Cancel',
  ...props
}) => {
  const classProps = classNames(className, style.modal);

  return (
    <AModal
      className={classProps}
      onOk={onOk}
      onCancel={onCancel}
      footer={[
        <Button
          key="back"
          size="middle"
          type="primary"
          ghost
          onClick={onCancel}
        >
          {cancelText}
        </Button>,
        <Button key="submit" type="primary" size="middle" onClick={onOk}>
          {okText}
        </Button>,
      ]}
      {...props}
    >
      {children}
    </AModal>
  );
};

export default Modal;
