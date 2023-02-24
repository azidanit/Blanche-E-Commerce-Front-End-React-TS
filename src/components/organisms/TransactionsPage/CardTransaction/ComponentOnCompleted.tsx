import { message } from 'antd';
import React, { useState } from 'react';
import { ModalConfirm, ModalReview } from '../../..';
import { useUpdateTransactionStatusMutation } from '../../../../app/features/transactions/transactionsApiSlice';
import { ITransaction } from '../../../../helpers/types';
import { Button } from '../../../atoms';
import { UpdateStatus } from '../../Merchant/Order/CardOrder/utils';
import style from './index.module.scss';

interface ComponentOnCompletedProps {
  transaction: ITransaction;
}

const ComponentOnCompleted: React.FC<ComponentOnCompletedProps> = ({
  transaction,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateOrderStatus, { isLoading }] =
    useUpdateTransactionStatusMutation();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleProcess = async () => {};

  return (
    <div className={style.ct__more__actions__details__btn}>
      <Button type="primary" size="small" onClick={handleOpenModal}>
        Review Product
      </Button>
      <ModalReview
        isModalOpen={isModalOpen}
        handleCancel={handleCloseModal}
        handleOk={handleProcess}
      />
    </div>
  );
};

export default ComponentOnCompleted;
