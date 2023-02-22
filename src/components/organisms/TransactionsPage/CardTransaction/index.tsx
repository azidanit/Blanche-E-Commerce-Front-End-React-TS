import React, { useEffect, useState } from 'react';
import { capitalizeFirstLetter } from '../../../../helpers/capitalizeFirstLetter';
import {
  dateToDayMonthStringYear,
  dateToMinuteHourMonthStringDayYear,
} from '../../../../helpers/parseDate';
import { Button, Card, Image, Tag } from '../../../atoms';
import style from './index.module.scss';
import { MdOutlineStorefront } from 'react-icons/md';
import { Divider, message } from 'antd';
import { toRupiah } from '../../../../helpers/toRupiah';
import { Link } from 'react-router-dom';
import { textTruncate } from '../../../../helpers/textTruncate';
import { ITransaction } from '../../../../helpers/types';
import { ModalConfirm } from '../../..';
import { UpdateStatus } from '../../Merchant/Order/CardOrder/utils';
import { useUpdateTransactionStatusMutation } from '../../../../app/features/transactions/transactionsApiSlice';

interface CardTransactionProps {
  transaction: ITransaction;
}

const mapStatusToColor = {
  completed: 'green',
  waiting: 'warning',
  processed: 'blue',
  onDelivery: 'blue',
  canceled: 'red',
  delivered: 'blue',
  requestRefund: 'warning',
  refunded: 'green',
};

const CardTransaction: React.FC<CardTransactionProps> = ({ transaction }) => {
  const [status, setStatus] = useState('waiting');
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
        invoice_code: transaction.invoice_code,
      }).unwrap();
      message.success(
        'Order has been completed. You can see the detail in the Completed tab.',
      );
      handleCloseModal();
    } catch (e) {
      const err = e as Error;

      message.error(err.message);
    }
  };

  const handleRequestRefund = async () => {
    console.log('request refund');
  };

  useEffect(() => {
    if (transaction.transaction_status.on_canceled_at) {
      setStatus('canceled');
      return;
    }
    if (transaction.transaction_status.on_completed_at) {
      setStatus('completed');
      return;
    }
    if (transaction.transaction_status.on_delivered_at) {
      setStatus('delivered');
      return;
    }
    if (transaction.transaction_status.on_processed_at) {
      setStatus('processed');
      return;
    }
    if (transaction.transaction_status.on_waited_at) {
      setStatus('waiting');
      return;
    }
  }, [transaction]);

  return (
    <Card className={style.ct}>
      <div className={style.ct__header}>
        <div className={style.ct__header__flex}>
          <Link
            to={`/${transaction.merchant.domain}`}
            className={style.ct__header__store}
          >
            <MdOutlineStorefront
              size={20}
              className={style.ct__header__store__icon}
            />
            <p className={style.ct__header__store__name}>
              {transaction.merchant.name}
            </p>
          </Link>
          <p>
            {dateToMinuteHourMonthStringDayYear(
              new Date(transaction.transaction_status.on_waited_at),
              ' ',
            )}
          </p>
        </div>
        <div className={style.ct__header__flex}>
          <p className={style.ct__header__invoice}>
            {transaction.invoice_code}
          </p>
          <Tag
            className={style.ct__header__tag}
            color={mapStatusToColor[status as keyof typeof mapStatusToColor]}
          >
            {capitalizeFirstLetter(status)}
          </Tag>
        </div>
      </div>
      <Divider className={style.ct__divider} />
      <div className={style.ct__product}>
        <Image
          src={transaction.product_overview.product.image}
          alt="product"
          className={style.ct__product__image}
          imageClassName={style.ct__product__image__img}
        />
        <div className={style.ct__product__details}>
          <p className={style.ct__product__details__name}>
            {textTruncate(transaction.product_overview.product.name, 100)}
          </p>
          <p className={style.ct__product__details__quantity}>
            {`${transaction.product_overview.total_product} items`} x{' '}
            {toRupiah(transaction.product_overview.product.discount_price)}
          </p>
          {transaction.product_overview.total_product > 1 && (
            <p className={style.ct__product__details__others}>
              +{transaction.product_overview.total_product - 1} other items
            </p>
          )}
        </div>
      </div>
      <Divider className={style.ct__divider} />
      <div className={style.ct__more}>
        <div className={style.ct__more__price}>
          <p className={style.ct__more__price__text}>Total Price</p>
          <p className={style.ct__more__price__value}>
            {toRupiah(transaction.total_price)}
          </p>
        </div>
        <div className={style.ct__more__actions}>
          <Link
            to={`${transaction.invoice_code}`}
            className={style.ct__more__actions__details}
          >
            Go to Transaction Details
          </Link>
          {transaction.transaction_status.on_delivered_at &&
            !transaction.transaction_status.on_completed_at && (
              <div className={style.ct__more__actions__details__btn}>
                <Button type="primary" size="small" onClick={handleOpenModal}>
                  Confirm Received
                </Button>
                <Button
                  type="primary"
                  ghost
                  danger
                  size="small"
                  onClick={handleOpenModalRequestRefund}
                >
                  Request Refund
                </Button>
              </div>
            )}
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
      </div>
    </Card>
  );
};

export default CardTransaction;
