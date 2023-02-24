import React from 'react';
import CardReview from './CardReview';
import style from './index.module.scss';

const ListReviews: React.FC = () => {
  return (
    <div className={style.list__reviews}>
      <CardReview />
      <CardReview />
    </div>
  );
};

export default ListReviews;
