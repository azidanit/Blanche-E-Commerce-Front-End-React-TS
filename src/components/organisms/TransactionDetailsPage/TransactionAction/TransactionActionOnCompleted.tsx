import { Divider, message } from 'antd';
import React, { useState } from 'react';
import { ModalConfirm, Button, ModalReview } from '../../..';
import { IGetTransactionDetailsResponse } from '../../../../helpers/types';
import { UpdateStatus } from '../../Merchant/Order/CardOrder/utils';
import style from './index.module.scss';
import { useUpdateTransactionStatusMutation } from '../../../../app/features/transactions/transactionsApiSlice';
import { useGetProductReviewByInvCodeQuery } from '../../../../app/features/reviews/reviewsApiSlice';

interface TransactionActionProps {
  transaction: IGetTransactionDetailsResponse | undefined;
}

const TransactionActionOnCompleted: React.FC<TransactionActionProps> = ({
  transaction,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, isLoading: isLoadingGetReview } =
    useGetProductReviewByInvCodeQuery(
      {
        invoice_code: transaction?.invoice_code ? transaction.invoice_code : '',
      },
      {
        skip: !transaction,
      },
    );
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
        data={data}
        isModalOpen={isModalOpen}
        handleCancel={handleCloseModal}
        handleOk={handleProcess}
        transaction={transaction}
      />
    </>
  );
};

export default TransactionActionOnCompleted;
