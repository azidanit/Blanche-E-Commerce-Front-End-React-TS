import { Card, Divider } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { textTruncate } from '../../../../helpers/textTruncate';
import { toRupiah } from '../../../../helpers/toRupiah';
import { Image } from '../../../atoms';
import style from './index.module.scss';

interface DetailProductProps {
  transaction: any;
}

const DetailProduct: React.FC<DetailProductProps> = ({ transaction }) => {
  return (
    <Card className={style.dp}>
      <div className={style.dp__product}>
        <Image
          src={transaction.product.url}
          alt="product"
          className={style.dp__product__image}
          imageClassName={style.dp__product__image__img}
        />
        <div className={style.dp__product__details}>
          <p className={style.dp__product__details__name}>
            {textTruncate(transaction.product.name)}
          </p>
          <p className={style.dp__product__details__quantity}>
            {`${transaction.product.quantity} items`} x{' '}
            {toRupiah(transaction.product.price)}
          </p>
        </div>
      </div>
      <Divider className={style.dp__divider} />
      <div className={style.dp__more}>
        <div className={style.dp__more__price}>
          <p className={style.dp__more__price__text}>Total Price</p>
          <p className={style.dp__more__price__value}>{toRupiah(10000)}</p>
        </div>
        <div className={style.dp__more__actions}>
          <Link to="" className={style.dp__more__actions__details}>
            Go to Product Page
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default DetailProduct;
