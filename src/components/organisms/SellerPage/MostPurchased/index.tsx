import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../../../../app/features/home/homeApiSlice';
import { ListCardProduct } from '../../../molecules';
import style from './index.module.scss';

const MostPurchased: React.FC = () => {
  const { store } = useParams();

  const { data } = useGetProductsQuery({
    limit: 6,
    merchant: store,
    sort_dir: 'desc',
    sort_by: 'num_of_sale',
  });
  return (
    <div className={style.most__purchased}>
      <div className={style.most__purchased__title}>
        <h2 className={style.most__purchased__header}>
          Most Purchased Product
        </h2>
        <p>View all</p>
      </div>
      {data && <ListCardProduct data={data} />}
    </div>
  );
};

export default MostPurchased;
