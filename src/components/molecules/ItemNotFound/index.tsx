import classNames from 'classnames';
import React from 'react';
import { Card, Image } from '../../atoms';
import style from './index.module.scss';

interface ItemNotFoundProps {
  className?: string;
  title: string;
  body?: string;
}

const ItemNotFound: React.FC<ItemNotFoundProps> = ({
  className,
  title,
  body = '',
}) => {
  const classProps = classNames(style.inf, className);
  return (
    <Card className={classProps}>
      <Image
        src="/assets/svg/item-not-found.svg"
        alt="not found"
        className={style.inf__image}
      />
      <div className={style.inf__content}>
        <p className={style.inf__content__title}>{title}</p>
        <p className={style.inf__content__body}>{body}</p>
      </div>
    </Card>
  );
};

export default ItemNotFound;
