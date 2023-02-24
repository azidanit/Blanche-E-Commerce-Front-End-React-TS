import React from 'react';
import { Avatar, Card, Image, Rate } from '../../../../atoms';
import style from './index.module.scss';

const CardReview: React.FC = () => {
  return (
    <Card className={style.card__review}>
      <div className={style.card__review__rating}>
        <Rate />
        <p>2 Days ago</p>
      </div>
      <div className={style.card__review__body}>
        <div className={style.card__review__body__user}>
          <Avatar />
          <p>Giwang</p>
        </div>
        <Image
          src="https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/11/24/f9af4537-4e7e-48ae-9e5d-c5736865c793.jpg.webp?ect=4g"
          alt=""
          className={style.card__review__body__img}
        />
        <p className={style.card__review__body__text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          auctor, nisl eget ultricies tincidunt, nunc
        </p>
      </div>
    </Card>
  );
};

export default CardReview;
