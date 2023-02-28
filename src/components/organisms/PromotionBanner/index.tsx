import React, { useRef, useState } from 'react';
import { Carousel } from 'antd';
import CardBanner from './CardBanner';
import style from './index.module.scss';
import './override.scss';
import classNames from 'classnames';
import { CarouselRef } from 'antd/es/carousel';

const PromotionBanner: React.FC = () => {
  return (
    <Carousel
      className={classNames(style.promotion__banner, 'promotion__banner')}
      autoplay
      swipeToSlide
      draggable
    >
      <CardBanner />
      <CardBanner />
      <CardBanner />
    </Carousel>
  );
};

export default PromotionBanner;
