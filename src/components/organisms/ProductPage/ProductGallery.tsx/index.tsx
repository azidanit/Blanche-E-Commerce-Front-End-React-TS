import { Skeleton } from 'antd';
import classNames from 'classnames';
import React, { useState } from 'react';
import { setActiveImage } from '../../../../app/features/product/productSlice';
import { useAppDispatch } from '../../../../app/hooks';
import useProduct from '../../../../hooks/useProduct';
import { Image } from '../../../atoms';
import style from './index.module.scss';

const ProductGallery: React.FC = () => {
  const { images, activeImage, isLoading } = useProduct();
  const dispatch = useAppDispatch();

  const handleActiveImage = (image: string) => {
    dispatch(setActiveImage(image));
  };

  console.log('ProductGallery', images, activeImage, isLoading);

  return (
    <div className={style.product__gallery}>
      <div className={style.product__gallery__image__active}>
        {isLoading ? (
          <Skeleton.Image />
        ) : (
          <Image
            src={activeImage as string}
            alt=""
            className={style.product__gallery__image__active__item}
          />
        )}
      </div>
      <div className={style.product__gallery__image__list}>
        {images?.map((image, index) =>
          isLoading ? (
            <Skeleton key={image} />
          ) : (
            <Image
              src={image}
              key={`${image} ${index}`}
              alt=""
              onClick={() => handleActiveImage(image)}
              onMouseEnter={() => handleActiveImage(image)}
              className={classNames(
                style.product__gallery__image__list__item,
                activeImage === image &&
                  'product__gallery__image__list__item__active',
              )}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default ProductGallery;
