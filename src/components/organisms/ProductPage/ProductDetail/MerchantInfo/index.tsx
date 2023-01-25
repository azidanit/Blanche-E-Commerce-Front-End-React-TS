import React from 'react';
import { Link } from 'react-router-dom';
import useProduct from '../../../../../hooks/useProduct';
import { Avatar, Rate } from '../../../../atoms';
import style from './index.module.scss';

const MerchantInfo: React.FC = () => {
  const { product } = useProduct();
  return (
    <div className={style.merchant__info}>
      <Link to="/">
        <Avatar
          size={50}
          src={product?.merchant?.image}
          alt={product?.merchant?.name}
        />
      </Link>
      <div className={style.merchant__info__desc}>
        <Link to="/" className={style.merchant__info__desc__link}>
          {product?.merchant?.name}
        </Link>
        <p>{product?.merchant?.seller_city}</p>
        <p>
          <Rate disabled count={product?.merchant?.avg_rating} />{' '}
          {product?.merchant?.avg_rating}
        </p>
      </div>
    </div>
  );
};

export default MerchantInfo;
