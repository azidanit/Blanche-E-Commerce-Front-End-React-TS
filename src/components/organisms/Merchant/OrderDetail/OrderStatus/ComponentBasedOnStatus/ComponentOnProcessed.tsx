import { message } from 'antd';
import React, { useRef, useState } from 'react';
import {
  Form,
  ModalConfirm,
  ModalHeader,
  ShippingLabel,
  Modal,
} from '../../../../..';
import { useUpdateMerchantOrderStatusMutation } from '../../../../../../app/features/merchant/merchantOrderApiSlice';
import { Button, FormLabel, Input } from '../../../../../atoms';
import { ComponentBasedOnStatusProps } from './ComponentOnCanceled';
import style from '../index.module.scss';
import { EnumUpdateStatus } from '..';
import { useReactToPrint } from 'react-to-print';
import { capitalizeFirstLetter } from '../../../../../../helpers/capitalizeFirstLetter';

const ComponentOnProcessed: React.FC<ComponentBasedOnStatusProps> = ({
  transaction,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [receiptCode, setReceiptCode] = useState<string | undefined>(undefined);
  const [updateOrderStatus, { isLoading }] =
    useUpdateMerchantOrderStatusMutation();

  const [isLabelVisible, setIsLabelVisible] = useState(false);

  const componentRef = useRef(null);

  const handlePrintLabel = () => {
    setIsLabelVisible(true);
  };
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

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
        status: EnumUpdateStatus.TransactionStatusOnDelivery,
        invoice_code: transaction.invoice_code,
        receipt_number: receiptCode,
      }).unwrap();
      message.success(
        'Order has been delivered. You can see the detail in the Delivered Order tab.',
      );
      handleCloseModal();
    } catch (e) {
      const err = e as Error;

      message.error(capitalizeFirstLetter(err.message));
    }
  };
  return (
    <div className={style.os__status}>
      <div className={style.os__status__item}>
        <p className={style.os__status__item__text}>
          Order Need to be delivered
        </p>
        <p>
          Please make sure you have printed the label and delivered the order to
          the customer.
        </p>
      </div>
      <div className={style.os__status__action}>
        <Button type="primary" size="large" ghost onClick={handlePrintLabel}>
          Print Label
        </Button>
        <Button type="primary" size="large" onClick={handleOpenModal}>
          Deliver Order
        </Button>
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
        <Modal
          open={isLabelVisible}
          onOk={handlePrint}
          width={600}
          onCancel={() => setIsLabelVisible(false)}
        >
          <ModalHeader
            title="Print Label"
            info='Print the label and paste it on the package. Then, click "Deliver Order" button to deliver the order.'
          />
          <div ref={componentRef}>
            <ShippingLabel transaction={transaction} />
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default ComponentOnProcessed;
