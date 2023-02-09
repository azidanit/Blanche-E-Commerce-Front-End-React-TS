import React from 'react';
import { capitalizeFirstLetter } from '../../../../helpers/capitalizeFirstLetter';
import { dateToDayMonthStringYear } from '../../../../helpers/parseDate';
import { Card, Image, Tag } from '../../../atoms';
import style from './index.module.scss';
import { MdOutlineStorefront } from 'react-icons/md';
import { Divider } from 'antd';
import { toRupiah } from '../../../../helpers/toRupiah';
import { Link } from 'react-router-dom';
import { textTruncate } from '../../../../helpers/textTruncate';

interface CardTransactionProps {
  transaction: any;
}

const mapStatusToColor = {
  completed: 'green',
  pending: 'processed',
  canceled: 'red',
  delivered: 'blue',
};

const CardTransaction: React.FC<CardTransactionProps> = ({ transaction }) => {
  return (
    <>
      <Card className={style.ct}>
        <div className={style.ct__header}>
          <div className={style.ct__header__flex}>
            <div className={style.ct__header__store}>
              <MdOutlineStorefront
                size={20}
                className={style.ct__header__store__icon}
              />
              <p className={style.ct__header__store__name}>
                {transaction.merchant.name}
              </p>
            </div>
            <p>{dateToDayMonthStringYear(transaction.issued_at, ' ')}</p>
          </div>
          <div className={style.ct__header__flex}>
            <p className={style.ct__header__invoice}>
              {transaction.invoice_id}
            </p>
            <Tag
              className={style.ct__header__tag}
              color={
                mapStatusToColor[
                  transaction.status as keyof typeof mapStatusToColor
                ]
              }
            >
              {capitalizeFirstLetter(transaction.status)}
            </Tag>
          </div>
        </div>
        <Divider className={style.ct__divider} />
        <div className={style.ct__product}>
          <Image
            src={transaction.product.url}
            alt="product"
            className={style.ct__product__image}
            imageClassName={style.ct__product__image__img}
          />
          <div className={style.ct__product__details}>
            <p className={style.ct__product__details__name}>
              {textTruncate(transaction.product.name)}
            </p>
            <p className={style.ct__product__details__quantity}>
              {`${transaction.product.quantity} items`} x{' '}
              {toRupiah(transaction.product.price)}
            </p>
          </div>
        </div>
        <Divider className={style.ct__divider} />
        <div className={style.ct__more}>
          <div className={style.ct__more__price}>
            <p className={style.ct__more__price__text}>Total Price</p>
            <p className={style.ct__more__price__value}>{toRupiah(10000)}</p>
          </div>
          <div className={style.ct__more__actions}>
            <Link
              to={`${transaction.id}`}
              className={style.ct__more__actions__details}
            >
              Go to Transaction Details
            </Link>
          </div>
        </div>
      </Card>
    </>
  );
};

export default CardTransaction;
