import React from 'react';
import { useGetProductsQuery } from '../../../../app/features/home/homeApiSlice';
import { ListCardProduct } from '../../../molecules';
import style from './index.module.scss';

interface MoreProductsProps {
  limit?: number;
  merchant_id?: number;
  category_id?: number;
  title?: string;
}

const MoreProducts: React.FC<MoreProductsProps> = ({
  limit = 6,
  merchant_id,
  category_id,
  title,
}) => {
  const { data } = useGetProductsQuery({
    limit: limit,
    merchant_id: merchant_id,
  });
  return (
    <div className={style.seller__products}>
      <h2 className={style.seller__products__header}>{title}</h2>
      {data && <ListCardProduct data={data} />}
    </div>
  );
};

export default MoreProducts;
