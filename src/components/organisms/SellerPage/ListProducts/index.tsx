import { Divider } from 'antd';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../../../../app/features/home/homeApiSlice';
import { ListCardProduct } from '../../../molecules';
import style from './index.module.scss';

const ListProducts: React.FC = () => {
  const { store } = useParams();

  const { data } = useGetProductsQuery(
    {
      merchant: store,
    },
    { skip: !store },
  );

  return (
    <div className={style.product__lists}>
      <div className={style.product__lists__title}>
        <h2 className={style.product__lists__header}>Seller Product</h2>
      </div>
      <Divider />
      {data && <ListCardProduct data={data} />}
    </div>
  );
};

export default ListProducts;
