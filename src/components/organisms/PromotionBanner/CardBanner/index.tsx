import React from 'react';
import { Image } from '../../../atoms';
import style from './index.module.scss';

const CardBanner: React.FC = () => {
  return (
    <div className={style.card__banner}>
      <Image
        src="https://img.freepik.com/free-photo/person-with-monkey-head-using-smartphone-train_23-2149384284.jpg?w=1380&t=st=1677141778~exp=1677142378~hmac=a4500d903cf2aa0da869b68cad42ac0fb866c2697898c1e8f5b6e86ba7856178"
        alt="test"
        className={style.card__banner__img}
        imageClassName={style.card__banner__img__img}
      />
      <div className={style.card__banner__content}>
        <h4>Card Banner</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          nihil dolor ex veniam odio totam, voluptatibus unde laudantium et
          maiores!
        </p>
      </div>
    </div>
  );
};

export default CardBanner;
