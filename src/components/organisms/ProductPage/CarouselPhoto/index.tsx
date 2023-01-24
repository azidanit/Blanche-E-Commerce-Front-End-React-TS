import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import style from './index.module.scss';

interface CarouselProps {
  selectedItem: number;
  photos: string[];
}

const CarouselPhoto: React.FC<CarouselProps> = ({ photos, selectedItem }) => {
  return (
    <div className={style.carousel}>
      <Carousel selectedItem={3}>
        {photos?.map((photo) => (
          <div key={photo} className={style.carousel__photo}>
            <img src={photo} alt="detail-house" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselPhoto;
