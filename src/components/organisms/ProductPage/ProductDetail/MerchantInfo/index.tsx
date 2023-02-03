import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetMerchantInfoQuery } from '../../../../../app/features/merchant/merchantApiSlice';
import { Avatar, Rate } from '../../../../atoms';
import style from './index.module.scss';

const MerchantInfo: React.FC = () => {
  const { store, slug } = useParams();

  const {
    data: merchant,
    error: merchantError,
    isLoading: merchantLoading,
  } = useGetMerchantInfoQuery(store as string);

  return (
    <div className={style.merchant__info}>
      <Link to="/">
        <Avatar size={50} src={merchant?.image_url} alt={merchant?.name} />
      </Link>
      <div className={style.merchant__info__desc}>
        <Link to="/" className={style.merchant__info__desc__link}>
          {merchant?.name}
        </Link>
        <p>{merchant?.address.city}</p>
        <div>
          <Rate disabled value={merchant?.avg_rating} /> {merchant?.avg_rating}
        </div>
      </div>
    </div>
  );
};

export default MerchantInfo;
