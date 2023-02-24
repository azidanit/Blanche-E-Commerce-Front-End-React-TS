import { Divider, message } from 'antd';
import React, { useState } from 'react';
import { ModalConfirm, Button } from '../../..';
import { IGetTransactionDetailsResponse } from '../../../../helpers/types';
import { UpdateStatus } from '../../Merchant/Order/CardOrder/utils';
import style from './index.module.scss';
import { useUpdateTransactionStatusMutation } from '../../../../app/features/transactions/transactionsApiSlice';
import { capitalizeFirstLetter } from '../../../../helpers/capitalizeFirstLetter';

interface TransactionActionProps {
  transaction: IGetTransactionDetailsResponse | undefined;
}

const TransactionActionOnDelivered: React.FC<TransactionActionProps> = ({
  transaction,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalDeclineOpen, setIsModalDeclineOpen] = useState(false);
  const [updateOrderStatus, { isLoading }] =
    useUpdateTransactionStatusMutation();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleOpenModalRequestRefund = () => {
    setIsModalDeclineOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCloseModalDecline = () => {
    setIsModalDeclineOpen(false);
  };

  const handleProcess = async () => {
    try {
      await updateOrderStatus({
        status: UpdateStatus.TransactionStatusOnCompleted,
        invoice_code: transaction?.invoice_code ? transaction.invoice_code : '',
      }).unwrap();
      message.success(
        'Order has been completed. You can see the detail in the Completed tab.',
      );
      handleCloseModal();
    } catch (e) {
      const err = e as Error;

      message.error(capitalizeFirstLetter(err.message));
    }
  };

  const handleRequestRefund = async () => {
    console.log('request refund');
  };
  return (
    <>
      <Divider />
      <div className={style.ta__actions}>
        <p>Confirm that you have received the order and the transaction</p>
        <div className={style.ta__actions__details__btn}>
          <Button type="primary" onClick={handleOpenModal} size="large">
            Confirm Received
          </Button>
          <Button
            type="primary"
            ghost
            danger
            size="large"
            onClick={handleOpenModalRequestRefund}
          >
            Request Refund
          </Button>
        </div>
      </div>

      <ModalConfirm
        isModalOpen={isModalOpen}
        handleCancel={handleCloseModal}
        handleOk={handleProcess}
        title="Confirm Received Order"
        info=" Are you sure to confirm this order as received? This action cannot be undone."
        confirmButtonText="confirm"
        cancelButton={true}
        confirmButtonProps={{ loading: isLoading }}
      />
      <ModalConfirm
        isModalOpen={isModalDeclineOpen}
        handleCancel={handleCloseModalDecline}
        handleOk={handleRequestRefund}
        title="Request Refund"
        info=" Are you sure to request refund for this order? "
        confirmButtonText="Request"
        cancelButton={true}
        confirmButtonProps={{ loading: isLoading, danger: true }}
      />
    </>
  );
};

export default TransactionActionOnDelivered;
