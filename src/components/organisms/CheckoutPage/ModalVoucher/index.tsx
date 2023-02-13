import { Radio } from 'antd';
import React from 'react';
import { Modal, ModalHeader } from '../../../molecules';
import CardVoucher from './CardVoucher';
import style from './index.module.scss';

interface ModalVoucherProps {
  isModalOpen: boolean;
  handleCancel: () => void;
  handleOk: () => void;
}

const ModalVoucher: React.FC<ModalVoucherProps> = ({
  isModalOpen,
  handleCancel,
  handleOk,
}) => {
  return (
    <Modal
      open={isModalOpen}
      centered
      onCancel={handleCancel}
      className={style.choose__address__modal}
      width={600}
    >
      <ModalHeader title="Choose Voucher" />

      <Radio.Group>
        <Radio value={1}>
          <CardVoucher />
        </Radio>
      </Radio.Group>
    </Modal>
  );
};

export default ModalVoucher;
