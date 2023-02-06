import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetMerchantInfoQuery } from '../../app/features/merchant/merchantApiSlice';
import { CardSellerProfile, SellerProducts } from '../../components';
import style from './index.module.scss';

const Seller: React.FC = () => {
  return (
    <div className={style.seller__page}>
      <>
        <CardSellerProfile />
        <SellerProducts />
      </>
    </div>
  );
};

export default Seller;
