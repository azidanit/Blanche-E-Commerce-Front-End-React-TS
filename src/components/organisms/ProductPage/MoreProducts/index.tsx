import React from 'react';
import { Link } from 'react-router-dom';
import { IGetProductListResponse } from '../../../../helpers/types';
import { CarouselProducts } from '../../../molecules';
import style from './index.module.scss';

interface MoreProductsProps {
  title: string;
  data: IGetProductListResponse | undefined;
  to: string;
  isLoading: boolean;
}

const MoreProducts: React.FC<MoreProductsProps> = ({
  title,
  data,
  to,
  isLoading,
}) => {
  if (!data) {
    return <></>;
  }

  if (data?.products ? data?.products?.length === 1 : 1) {
    return <></>;
  }

  return (
    <div className={style.seller__products}>
      <div className={style.seller__products__header}>
        <h2>{title}</h2>
        <Link to={to} className={style.seller__products__header__link}>
          View All
        </Link>
      </div>
      {data && <CarouselProducts data={data} isLoading={isLoading} />}
    </div>
  );
};

export default MoreProducts;
