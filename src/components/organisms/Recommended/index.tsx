import React from 'react';
import { Link } from 'react-router-dom';
import { useGetRecommendationsQuery } from '../../../app/features/home/homeApiSlice';
import { ListCardProduct } from '../../molecules';
import style from './index.module.scss';

const limit = 18;

const Recommended: React.FC = () => {
  const { data } = useGetRecommendationsQuery({ limit });
  return (
    <div className={style.recommended}>
      <div className={style.recommended__header}>
        <h2 className={style.recommended__header__title}>For You</h2>
        <Link to="/recommendation" className={style.recommended__header__link}>
          View all
        </Link>
      </div>
      {data && <ListCardProduct data={data} />}
    </div>
  );
};

export default Recommended;
