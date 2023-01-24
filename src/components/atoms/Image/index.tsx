import React from 'react';
import style from './index.module.scss';
import classNames from 'classnames';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const Image: React.FC<ImageProps> = ({ className, src, alt }) => {
  const classProps = classNames(className, style.image);

  return (
    <div className={classProps}>
      <img className={style.image__img} src={src} alt={alt} />
    </div>
  );
};

export default Image;
