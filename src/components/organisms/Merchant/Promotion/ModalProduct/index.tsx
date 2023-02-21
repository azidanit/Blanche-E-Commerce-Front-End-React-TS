import React from 'react';
import { Button } from '../../../../atoms';
import { Modal, ModalHeader } from '../../../../molecules';
import TableProduct from '../TableProduct';
import style from './index.module.scss';

interface ModalProductProps {
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}

const ModalProduct: React.FC<ModalProductProps> = ({
  isModalOpen,
  handleOk,
  handleCancel,
}) => {
  return (
    <Modal
      open={isModalOpen}
      centered
      className={style.modal__product}
      width={700}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <ModalHeader
        className={style.modal__product__header}
        title="Choose Products"
      />
      <TableProduct />
    </Modal>
  );
};

export default ModalProduct;
