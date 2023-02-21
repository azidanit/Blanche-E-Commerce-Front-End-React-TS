import { message } from 'antd';
import React, { useState } from 'react';
import { useUpdateMerchantOrderStatusMutation } from '../../../../../../app/features/merchant/merchantOrderApiSlice';
import { Button } from '../../../../../atoms';
import { ComponentBasedOnStatusProps } from './ComponentOnCanceled';
import style from '../index.module.scss';
import { UpdateStatus } from '../utils';
import { ModalConfirm } from '../../../../..';

const ComponentOnWaited: React.FC<ComponentBasedOnStatusProps> = ({
  transaction,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalDeclineOpen, setIsModalDeclineOpen] = useState(false);
  const [updateOrderStatus, { isLoading }] =
    useUpdateMerchantOrderStatusMutation();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleOpenModalDecline = () => {
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
        status: UpdateStatus.TransactionStatusProcessed,
        invoice_code: transaction.invoice_code,
      }).unwrap();
      message.success(
        'Order has been processed. You can see the detail in the Processed Order tab.',
      );
      handleCloseModal();
    } catch (e) {
      const err = e as Error;

      message.error(err.message);
    }
  };

  const handleDecline = async () => {
    try {
      await updateOrderStatus({
        status: UpdateStatus.TransactionStatusOnCancel,
        invoice_code: transaction.invoice_code,
      }).unwrap();

      message.success(
        'Order has been declined. You can see the detail in the Canceled Order tab.',
      );

      handleCloseModalDecline();
    } catch (e) {
      const err = e as Error;

      message.error(err.message);
    }
  };
  return (
    <>
      <div className={style.card__order__actions__btn}>
        <Button
          type="primary"
          size="large"
          danger
          onClick={handleOpenModalDecline}
        >
          Decline Order
        </Button>
        <Button type="primary" size="large" onClick={handleOpenModal}>
          Process Order
        </Button>
      </div>
      <ModalConfirm
        isModalOpen={isModalOpen}
        handleCancel={handleCloseModal}
        handleOk={handleProcess}
        title="Process Order"
        info="Are you sure to process this order?"
        confirmButtonText="Process"
        cancelButton={true}
        confirmButtonProps={{ loading: isLoading }}
      />
      <ModalConfirm
        isModalOpen={isModalDeclineOpen}
        handleCancel={handleCloseModalDecline}
        handleOk={handleDecline}
        title="Decline Order"
        info="Are you sure to decline this order? This action cannot be undone."
        confirmButtonText="Decline Order"
        cancelButton={true}
        confirmButtonProps={{ loading: isLoading, danger: true }}
      />
    </>
  );
};

export default ComponentOnWaited;
