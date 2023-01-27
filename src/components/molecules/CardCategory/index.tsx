import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ICategory } from '../../../helpers/types';
import { Card, Image } from '../../atoms';
import style from './index.module.scss';

interface CardCategoryProps {
  category: ICategory;
}

const CardCategory: React.FC<CardCategoryProps> = ({ category }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${category.slug}`);
  };
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <Card
      className={`${style.cc} ${mounted ? style.cc__mounted : ''}`}
      onClick={handleClick}
    >
      <Image
        src={category.image_url}
        alt={category.name}
        className={style.cc__image}
      />
      <p className={style.cc__name}>{category.name}</p>
    </Card>
  );
};

export default CardCategory;
