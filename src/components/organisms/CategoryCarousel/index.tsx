import React from 'react';
import { Carousel } from '../../molecules';
import style from './index.module.scss';

const CategoryCarousel: React.FC = () => {
  return (
    <div className={style.cc}>
      <h2 className={style.cc__header}>Categories</h2>
      <Carousel />
    </div>
  );
};

export default CategoryCarousel;
