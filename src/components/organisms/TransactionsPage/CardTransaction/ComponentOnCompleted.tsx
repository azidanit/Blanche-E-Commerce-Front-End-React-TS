import React, { useState } from 'react';
import { ModalReview } from '../../..';
import { useGetProductReviewByInvCodeQuery } from '../../../../app/features/reviews/reviewsApiSlice';
import { useUpdateTransactionStatusMutation } from '../../../../app/features/transactions/transactionsApiSlice';
import { ITransaction } from '../../../../helpers/types';
import { Button } from '../../../atoms';
import style from './index.module.scss';

interface ComponentOnCompletedProps {
  transaction: ITransaction;
}

const ComponentOnCompleted: React.FC<ComponentOnCompletedProps> = ({
  transaction,
}) => {
  const { data, isLoading: isLoadingGetReview } =
    useGetProductReviewByInvCodeQuery({
      invoice_code: transaction.invoice_code,
    });

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
        {data?.find((item) => item.reviewed_at === null)
          ? ' Review Product'
          : 'See Review'}
      </Button>
      <ModalReview
        isModalOpen={isModalOpen}
        handleCancel={handleCloseModal}
        handleOk={handleProcess}
        data={data}
        transaction={transaction}
      />
    </div>
  );
};

export default ComponentOnCompleted;
