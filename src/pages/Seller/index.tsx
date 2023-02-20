import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetMerchantInfoQuery } from '../../app/features/merchant/merchantApiSlice';
import {
  Button,
  CardSellerProfile,
  ItemNotFound,
  SellerProducts,
} from '../../components';
import style from './index.module.scss';

const Seller: React.FC = () => {
  const params = useParams();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/', { replace: true });
  };
  const { data, isLoading } = useGetMerchantInfoQuery(params.store || '', {
    skip: !params.store,
  });

  if (!data) {
    if (!isLoading) {
      return (
        <div className={style.seller__page__notfound}>
          <ItemNotFound
            title="Store Not Found"
            body="Sorry, the store you are looking for is not found."
            className={style.seller__page__notfound__item}
            imageClassName={style.seller__page__notfound__image}
          />
          <Button type="primary" size="large" onClick={handleNavigate}>
            Back to Home
          </Button>
        </div>
      );
    }
  }
  return (
    <div className={style.seller__page}>
      <>
        <CardSellerProfile data={data} isLoading={isLoading} />
        <SellerProducts />
      </>
    </div>
  );
};

export default Seller;
