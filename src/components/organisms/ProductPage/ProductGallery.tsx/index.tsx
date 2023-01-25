import classNames from 'classnames';
import React, { useState } from 'react';
import { Image } from '../../../atoms';
import style from './index.module.scss';

const ProductGallery: React.FC = () => {
  const images = [
    'https://res.cloudinary.com/dqkivnsov/image/upload/v1672368688/toyota-fortuner-bekas-2020-harga-drop-77-juta-meski-baru-berjalan-8.000-km-123_polgvo.jpg',
    'https://res.cloudinary.com/dqkivnsov/image/upload/v1672368877/toyota-fortuner-bekas-2020-sub2_xkccvr.jpg',
    'https://res.cloudinary.com/dqkivnsov/image/upload/v1672368843/toyota_fortuner_bekas_2020_harga_drop_77_juta_meski_baru_berjalan_8.000_km_2_hnrlz2.jpg',
  ];

  const [activeImage, setActiveImage] = useState(images[0]);

  const handleActiveImage = (image: string) => {
    setActiveImage(image);
  };

  return (
    <div className={style.product__gallery}>
      <div className={style.product__gallery__image_active}>
        <Image
          src={activeImage}
          alt=""
          className={style.product__gallery__image__item}
        />
      </div>
      <div className={style.product__gallery__image__list}>
        {images.map((image) => (
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
