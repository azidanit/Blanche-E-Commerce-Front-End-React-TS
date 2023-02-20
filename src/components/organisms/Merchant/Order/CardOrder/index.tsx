import { Divider } from 'antd';
import React, { useEffect, useState } from 'react';
import { MdPerson } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { ModalConfirm } from '../../../..';
import { capitalizeFirstLetter } from '../../../../../helpers/capitalizeFirstLetter';
import { dateToDayMonthStringYear } from '../../../../../helpers/parseDate';
import { textTruncate } from '../../../../../helpers/textTruncate';
import { toRupiah } from '../../../../../helpers/toRupiah';
import { ITransaction } from '../../../../../helpers/types';
import { Button, Card, Image, Tag } from '../../../../atoms';
import ComponentOnCanceled from './ComponentOnCanceled';
import ComponentOnDelivery from './ComponentOnDelivery';
import ComponentOnProcessed from './ComponentOnProcessed';
import ComponentOnWaited from './ComponentOnWaited';
import style from './index.module.scss';
import OrderInfo from './OrderInfo';
import Product from './Product';

const mapStatusToColor = {
  completed: 'green',
  pending: 'processed',
  canceled: 'red',
  delivered: 'blue',
};

interface CardOrderProps {
  transaction: ITransaction;
  statusOrder?: number;
}

enum OrderStatus {
  TransactionStatusWaited = 0,
  TransactionStatusProcessed = 1,
  TransactionStatusCanceled = 2,
  TransactionStatusOnDelivery = 3,
  TransactionStatusDelivered = 3,
  TransactionStatusOnCompleted = 2,
}
const MapComponent = {
  [OrderStatus.TransactionStatusWaited]: <ComponentOnWaited />,
  [OrderStatus.TransactionStatusProcessed]: <ComponentOnProcessed />,
  [OrderStatus.TransactionStatusCanceled]: <ComponentOnCanceled />,
  [OrderStatus.TransactionStatusOnDelivery]: <ComponentOnDelivery />,
};

const CardOrder: React.FC<CardOrderProps> = ({
  transaction,
  statusOrder = 1,
}) => {
  const [status, setStatus] = useState('waiting');

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
  }, []);

  const renderComponent = (statusOrder: number): React.ReactNode => {
    return MapComponent[1];
  };

  return (
    <Card className={style.card__order}>
      <div className={style.card__order__header}>
        <div className={style.card__order__header__flex}>
          <div className={style.card__order__header__store}>
            <MdPerson
              size={20}
              className={style.card__order__header__store__icon}
            />
            <p className={style.card__order__header__user__name}>giwangdk</p> /
            <p className={style.card__order__header__no_invoice}>
              {transaction.invoice_code}
            </p>
            /<p className={style.card__order__header__date}>230118P0RTEF7M</p>
          </div>
          {dateToDayMonthStringYear(
            new Date(transaction.transaction_status.on_waited_at),
            ' ',
          )}
        </div>
        <div className={style.card__order__header__flex}>
          <Tag
            className={style.ct__header__tag}
            color={mapStatusToColor[status as keyof typeof mapStatusToColor]}
          >
            {capitalizeFirstLetter(status)}
          </Tag>
        </div>
      </div>
      <Divider className={style.card__order__divider} />
      <div className={style.card__order__body}>
        <Product />
        <div className={style.card__order__body__address}>
          <p className={style.card__order__body__address__title}>Address</p>
          <p className={style.card__order__body__address__text}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
            voluptas maxime labore eum exercitationem ipsum quas asperiores
            nisi. Alias, ab.
          </p>
        </div>
        <OrderInfo />
      </div>
      <Divider className={style.card__order__divider} />
      <div className={style.card__order__more}>
        <div className={style.card__order__more__price}>
          <p className={style.card__order__more__price__text}>Total Price</p>
          <p className={style.card__order__more__price__value}>
            {toRupiah(10000)}
          </p>
        </div>
      </div>
      <Divider className={style.card__order__divider} />
      {renderComponent(statusOrder)}
    </Card>
  );
};

export default CardOrder;
