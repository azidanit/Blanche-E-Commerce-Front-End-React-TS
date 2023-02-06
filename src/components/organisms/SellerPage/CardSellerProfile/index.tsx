import { Rate } from 'antd';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetMerchantInfoQuery } from '../../../../app/features/merchant/merchantApiSlice';
import { formatToDate } from '../../../../helpers/formatToDate';
import useMediaQuery from '../../../../hooks/useMediaQuery';
import { Avatar, Card } from '../../../atoms';
import style from './index.module.scss';

const CardSellerProfile: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const params = useParams();

  const { data, error, isLoading } = useGetMerchantInfoQuery(
    params.store || '',
    { skip: !params.store },
  );

  return (
    <Card className={style.card__seller__profile}>
      <div className={style.card__seller__profile__desc}>
        <Avatar
          size={isMobile ? 50 : 100}
          src={data?.image_url}
          alt={data?.name}
        />
        <div className={style.card__seller__profile__desc__info}>
          <p className={style.card__seller__profile__desc__link}>
            {data?.name}
          </p>
          {data?.address?.city && (
            <p>
              {data?.address.city}, {data?.address.province}
            </p>
          )}
          <p>Joined Date {formatToDate(data?.join_date || '')} </p>
        </div>
      </div>
      <div className={style.card__seller__profile__analytic}>
        <div className={style.card__seller__profile__analytic__item}>
          <p>
            <Rate value={data?.avg_rating} /> ({data?.num_of_review})
          </p>
          <p>Rating & Reviews</p>
        </div>
        <div className={style.card__seller__profile__analytic__item}>
          <p>{data?.num_of_product}</p>
          <p>Products</p>
        </div>
      </div>
    </Card>
  );
};

export default CardSellerProfile;
