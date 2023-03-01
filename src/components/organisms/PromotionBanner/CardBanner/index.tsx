import React from 'react';
import { Image } from '../../../atoms';
import style from './index.module.scss';
import { IPromotionBanner } from '../../../../helpers/types';

interface CardBannerProps {
  banner: IPromotionBanner
}

const CardBanner: React.FC<CardBannerProps> = ({banner}) => {
  return (
    <div className={style.card__banner}>
      <Image
        src={banner.image_url}
        alt={"image promotion banner"}
        className={style.card__banner__img}
        imageClassName={style.card__banner__img__img}
      />
      <div className={style.card__banner__content}>
        <h4>{banner.name}</h4>
        <p>
          {banner.description}
        </p>
      </div>
    </div>
  );
};

export default CardBanner;
