import classNames from 'classnames';
import React, { useState } from 'react';
import useProduct from '../../../../hooks/useProduct';
import { Image } from '../../../atoms';
import style from './index.module.scss';

const ProductGallery: React.FC = () => {
  const { images } = useProduct();
  const [activeImage, setActiveImage] = useState(images?.[0]);

  const handleActiveImage = (image: string) => {
    setActiveImage(image);
  };

  return (
    <div className={style.product__gallery}>
      <div className={style.product__gallery__image_active}>
        <Image
          src={activeImage as string}
          alt=""
          className={style.product__gallery__image__item}
        />
      </div>
      <div className={style.product__gallery__image__list}>
        {images?.map((image) => (
          <Image
            src={image}
            key={image}
            alt=""
            onClick={() => handleActiveImage(image)}
            onMouseEnter={() => handleActiveImage(image)}
            className={classNames(
              style.product__gallery__image__list__item,
              activeImage === image &&
                'product__gallery__image__list__item__active',
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
