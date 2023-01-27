import React from 'react';
import { Slider } from '../../molecules';
import style from './index.module.scss';

const CategorySlider: React.FC = () => {
  return (
    <div className={style.cs}>
      <h2 className={style.cs__header}>Categories</h2>
      <Slider />
    </div>
  );
};

export default CategorySlider;
