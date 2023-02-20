import { message } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, ModalConfirm } from '../../../../..';
import { useUpdateMerchantOrderStatusMutation } from '../../../../../../app/features/merchant/merchantOrderApiSlice';
import { Button, FormLabel, Input } from '../../../../../atoms';
import { ComponentBasedOnStatusProps } from './ComponentOnCanceled';
import style from '../index.module.scss';
import { UpdateStatus } from '../utils';

const ComponentOnProcessed: React.FC<ComponentBasedOnStatusProps> = ({
  transaction,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [receiptCode, setReceiptCode] = useState<string | undefined>(undefined);
  const [updateOrderStatus, { isLoading }] =
    useUpdateMerchantOrderStatusMutation();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleChangeReceiptCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReceiptCode(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      if (!receiptCode) {
        message.error('Receipt code is required');
        return;
      }
      await updateOrderStatus({
        status: UpdateStatus.TransactionStatusOnDelivery,
        invoice_code: transaction.invoice_code,
        receipt_number: receiptCode,
      }).unwrap();
      message.success(
        'Order has been delivered. You can see the detail in the Delivered Order tab.',
      );
      handleCloseModal();
    } catch (e) {
      const err = e as Error;

      message.error(err.message);
    }
  };
  return (
    <>
      <div className={style.card__order__actions}>
        <Link className={style.card__order__actions__link} to="/transactions">
          Detail Order
        </Link>
        <div className={style.card__order__actions__btn}>
          <Button type="primary" size="large" ghost>
            Print Label
          </Button>
          <Button type="primary" size="large" onClick={handleOpenModal}>
            Deliver Order
          </Button>
        </div>
      </div>
      <ModalConfirm
        isModalOpen={isModalOpen}
        handleCancel={handleCloseModal}
        handleOk={handleSubmit}
        title="Deliver Order"
        info="Are you sure to deliver this order? please make sure you have printed the label."
        confirmButtonText="Deliver"
        cancelButton={true}
        confirmButtonProps={{ loading: isLoading }}
      >
        <Form className={style.card__order__form} preserve={false}>
          <FormLabel
            label="Receipt Code"
            className={style.card__order__form__label}
            rules={[
              {
                required: true,
              },
            ]}
          />
          <Input
            size="middle"
            value={receiptCode}
            onChange={handleChangeReceiptCode}
            className={style.card__order__form__input}
            placeholder="Input receipt code"
          />
        </Form>
      </ModalConfirm>
    </>
  );
};

export default ComponentOnProcessed;
