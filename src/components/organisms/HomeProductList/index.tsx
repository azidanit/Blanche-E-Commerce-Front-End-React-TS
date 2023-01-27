import React from 'react';
import { useGetProductsQuery } from '../../../app/features/home/homeApiSlice';
import { ListCardProduct } from '../../molecules';
import style from './index.module.scss';

const HomeProductList: React.FC = () => {
  const { data } = useGetProductsQuery({ limit: 18 });
  return (
    <div className={style.hpl}>
      <h2 className={style.hpl__header}>For You</h2>
      {data && <ListCardProduct data={data} />}
    </div>
  );
};

export default HomeProductList;
