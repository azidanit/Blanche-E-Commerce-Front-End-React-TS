import React from 'react';
import { Carousel } from 'antd';
import CardBanner from './CardBanner';
import style from './index.module.scss';
import './override.scss';
import classNames from 'classnames';

const PromotionBanner: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <Carousel
      afterChange={onChange}
      className={classNames(style.promotion__banner, 'promotion__banner')}
      autoplay
    >
      <CardBanner />
      <CardBanner />
      <CardBanner />
    </Carousel>
  );
};

export default PromotionBanner;
