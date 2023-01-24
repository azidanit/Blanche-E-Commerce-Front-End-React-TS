import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { IImage } from '../../../../helpers/types';
import style from './index.module.scss';

interface CarouselProps {
  selectedItem: number;
  photos: IImage[];
}

const CarouselPhoto: React.FC<CarouselProps> = ({ photos, selectedItem }) => {
  return (
    <div className={style.carousel}>
      <Carousel selectedItem={3}>
        {photos?.map((photo) => (
          <div key={photo.image_url} className={style.carousel__photo}>
            <img src={photo.image_url} alt="detail-house" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselPhoto;
