import { Modal as AModal, ModalProps } from 'antd';
import React from 'react';

const Modal: React.FC<ModalProps> = ({ children, ...props }) => {
  return <AModal {...props}>{children}</AModal>;
};

export default Modal;
