import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useGetCategoriesQuery } from '../../../app/features/home/homeApiSlice';
import Arrow from '../Arrow';
import CardCategory from '../CardCategory';
import style from './index.module.scss';

type CarouselProps = {
  className?: string;
  limit?: number;
} & React.HTMLAttributes<HTMLDivElement>;

const timer = 3000;

const Carousel: React.FC<CarouselProps> = ({ className, limit = 4 }) => {
  const { data: categories } = useGetCategoriesQuery({ level: 1 });
  const classProps = classNames(style.carousel, className);
  const [first, setFirst] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFirst((prevValue) => prevValue + 1);
    }, timer);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleNext = () => {
    let curr = first + 1;
    if (first > categories!.length) curr = 0;
    setFirst(curr);
  };

  const handlePrev = () => {
    let curr = first - 1;
    if (first < 0) curr = categories!.length - 1;
    setFirst(curr);
  };

  const renderItems = () => {
    if (!categories) return [];
    const arr = [];
    let index;
    for (let i = first; i < first + limit; i++) {
      index = i;
      if (i >= categories.length) {
        index = i % categories.length;
      }
      if (i < 0) {
        index = categories.length + i;
      }
      const elem = (
        <CardCategory
          category={categories[index]}
          key={`${index} ${categories[index].name}`}
        />
      );
      arr.push(elem);
    }
    return arr;
  };
  return (
    <div className={classProps}>
      <Arrow
        className={`${style.carousel__left} ${style.carousel__arrow}`}
        onClick={handlePrev}
      >
        <LeftOutlined />
      </Arrow>
      <div className={style.carousel__items}>{categories && renderItems()}</div>
      <Arrow
        className={`${style.carousel__right} ${style.carousel__arrow}`}
        onClick={handleNext}
      >
        <RightOutlined />
      </Arrow>
    </div>
  );
};

export default Carousel;
