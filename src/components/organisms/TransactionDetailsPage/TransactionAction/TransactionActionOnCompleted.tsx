import { Divider, message } from 'antd';
import React, { useState } from 'react';
import { ModalConfirm, Button, ModalReview } from '../../..';
import { IGetTransactionDetailsResponse } from '../../../../helpers/types';
import { UpdateStatus } from '../../Merchant/Order/CardOrder/utils';
import style from './index.module.scss';
import { useUpdateTransactionStatusMutation } from '../../../../app/features/transactions/transactionsApiSlice';

interface TransactionActionProps {
  transaction: IGetTransactionDetailsResponse | undefined;
}

const TransactionActionOnCompleted: React.FC<TransactionActionProps> = ({
  transaction,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalDeclineOpen, setIsModalDeclineOpen] = useState(false);
  const [updateOrderStatus, { isLoading }] =
    useUpdateTransactionStatusMutation();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleProcess = async () => {
    console.log('process');
  };

  return (
    <>
      <Divider />
      <div className={style.ta__actions}>
        <p>Review and rate the product you have received</p>
        <div className={style.ta__actions__details__btn}>
          <Button type="primary" onClick={handleOpenModal} size="large">
            Review Product
          </Button>
        </div>
      </div>

      <ModalReview
        isModalOpen={isModalOpen}
        handleCancel={handleCloseModal}
        handleOk={handleProcess}
      />
    </>
  );
};

export default TransactionActionOnCompleted;
