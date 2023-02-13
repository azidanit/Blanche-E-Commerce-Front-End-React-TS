import React, { useState } from 'react';
import { Button } from '../../../atoms';
import { TbDiscount } from 'react-icons/tb';
import ModalVoucher from '../ModalVoucher';
import style from './index.module.scss';

const VoucherMarketplace: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Button
        onClick={showModal}
        size="large"
        className={style.voucher__marketplace}
        type="primary"
        block
        ghost
      >
        <TbDiscount />
        Choose Voucher
      </Button>
      <ModalVoucher
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        handleOk={handleOk}
      />
    </div>
  );
};

export default VoucherMarketplace;
