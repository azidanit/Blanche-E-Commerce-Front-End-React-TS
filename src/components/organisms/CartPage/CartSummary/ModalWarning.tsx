import React from 'react';
import Modal from '../../../molecules/Modal';
import { Button } from '../../../atoms';
import style from './index.module.scss';
import { ModalHeader } from '../../..';

interface ModalWarningPageProps {
  isModalOpen: boolean;
  handleCancel: () => void;
  handleOk: () => void;
}

const ModalWarning: React.FC<ModalWarningPageProps> = ({
  isModalOpen,
  handleCancel,
  handleOk,
}) => {
  return (
    <Modal
      open={isModalOpen}
      closable={false}
      centered
      className={style.cart__summary__modal}
      width={450}
      footer={null}
    >
      <ModalHeader
        className={style.cart__summary__modal__header}
        title="Address is empty"
        info="Please add your address to continue checkout"
      />
      <div className={style.cart__summary__modal__footer}>
        <Button type="primary" size="large" onClick={handleOk}>
          Add Address
        </Button>
        <Button type="primary" ghost size="large" onClick={handleCancel}>
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

export default ModalWarning;
