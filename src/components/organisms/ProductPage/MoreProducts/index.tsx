import React from 'react';
import { Link } from 'react-router-dom';
import { IGetProductListResponse } from '../../../../helpers/types';
import { ListCardProduct } from '../../../molecules';
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
        <Link to={to} className={style.seller__products__header__link}>
          View All
        </Link>
      </div>
      {data && <ListCardProduct data={data} />}
    </div>
  );
};

export default MoreProducts;
