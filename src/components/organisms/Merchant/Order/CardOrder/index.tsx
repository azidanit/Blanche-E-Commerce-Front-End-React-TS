import { Divider } from 'antd';
import React from 'react';
import { MdPerson } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../../../../helpers/capitalizeFirstLetter';
import { dateToDayMonthStringYear } from '../../../../../helpers/parseDate';
import { textTruncate } from '../../../../../helpers/textTruncate';
import { toRupiah } from '../../../../../helpers/toRupiah';
import { Button, Card, Image, Tag } from '../../../../atoms';
import style from './index.module.scss';
import OrderInfo from './OrderInfo';
import Product from './Product';

const mapStatusToColor = {
  completed: 'green',
  pending: 'processed',
  canceled: 'red',
  delivered: 'blue',
};

const CardOrder: React.FC = () => {
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
              230118P0RTEF7M
            </p>
            /<p className={style.card__order__header__date}>230118P0RTEF7M</p>
          </div>
          {/* <p>{dateToDayMonthStringYear(transaction.issued_at, ' ')}</p> */}
        </div>
        <div className={style.card__order__header__flex}>
          <Tag
            className={style.ct__header__tag}
            color={mapStatusToColor['pending']}
          >
            {capitalizeFirstLetter('pending')}
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
      <div className={style.card__order__actions}>
        <div className={style.card__order__actions__btn}>
          <Button type="primary" size="large">
            Action
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CardOrder;
