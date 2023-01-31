import { Modal as AModal, ModalProps } from 'antd';
import classNames from 'classnames';
import React from 'react';
import style from './index.module.scss';

const Modal: React.FC<ModalProps> = ({ children, className, ...props }) => {
  const classProps = classNames(className, style.modal);

  return (
    <AModal className={classProps} {...props}>
      {children}
    </AModal>
  );
};

export default Modal;
