import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { IGetProductListResponse } from '../../../../helpers/types';
import { Button } from '../../../atoms';
import { ListCardProduct } from '../../../molecules';
import useForm from '../../Auth/CardMerchantRegistration/SecondStep/useForm';
import style from './index.module.scss';

interface MoreProductsProps {
  title: string;
  data: IGetProductListResponse | undefined;
  to: string;
}

const MoreProducts: React.FC<MoreProductsProps> = ({ title, data, to }) => {
  if (!data) {
    return null;
  }

  return (
    <div className={style.seller__products}>
      <div className={style.seller__products__header}>
        <h2>{title}</h2>
        <Link to={to}>View All</Link>
      </div>
      {data && <ListCardProduct data={data} />}
    </div>
  );
};

export default MoreProducts;
