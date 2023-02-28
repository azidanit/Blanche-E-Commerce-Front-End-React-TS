import React from 'react';
import {
  IGetReviewsResponse,
  IReview,
} from '../../../../../helpers/types/review.interface';
import CardReview from './CardReview';
import style from './index.module.scss';

interface ListReviewsProps {
  data: IGetReviewsResponse | undefined;
}

const ListReviews: React.FC<ListReviewsProps> = ({ data }) => {
  if (!data) {
    return <></>;
  }

  return (
    <div className={style.list__reviews}>
      {data.reviews.map((review, index) => (
        <CardReview key={review.product_name + index} data={review} />
      ))}
    </div>
  );
};

export default ListReviews;
