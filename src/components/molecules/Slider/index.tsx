import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useGetCategoriesQuery } from '../../../app/features/home/homeApiSlice';
import Arrow from '../Arrow';
import CardCategory from '../CardCategory';
import style from './index.module.scss';

type SliderProps = {
  className?: string;
  limit?: number;
} & React.HTMLAttributes<HTMLDivElement>;

const Slider: React.FC<SliderProps> = ({ className, limit = 4 }) => {
  const { data: categories } = useGetCategoriesQuery({ level: 1 });
  const classProps = classNames(style.slider, className);
  const [maxPage, setMaxPage] = useState(1);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (categories) setMaxPage(Math.ceil(categories.length / limit));
  }, [categories]);

  const handleNext = () => {
    let nextPage = page + 1;
    if (nextPage > maxPage) nextPage = 1;
    setPage(nextPage);
  };

  const handlePrev = () => {
    let prevPage = page - 1;
    if (prevPage < 1) prevPage = maxPage;
    setPage(prevPage);
  };

  return (
    <div className={classProps}>
      <Arrow
        className={`${style.slider__left} ${style.slider__arrow}`}
        onClick={handlePrev}
      >
        <LeftOutlined />
      </Arrow>
      <div className={style.slider__items}>
        {categories &&
          categories
            .slice((page - 1) * limit, limit * page)
            .map((category) => (
              <CardCategory category={category} key={category.name} />
            ))}
      </div>
      <Arrow
        className={`${style.slider__right}  ${style.slider__arrow}`}
        onClick={handleNext}
      >
        <RightOutlined />
      </Arrow>
    </div>
  );
};

export default Slider;
