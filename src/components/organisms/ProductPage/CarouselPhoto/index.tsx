import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import style from './index.module.scss';

const CarouselPhoto: React.FC = () => {
  const photos = [
    {
      photo:
        'https://images.unsplash.com/photo-1674443544891-9c00f240b69c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      photo:
        'https://images.unsplash.com/photo-1674443544891-9c00f240b69c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      photo:
        'https://images.unsplash.com/photo-1674443544891-9c00f240b69c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      photo:
        'https://images.unsplash.com/photo-1674443544891-9c00f240b69c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    },
  ];

  return (
    <div className={style.carousel}>
      <Carousel selectedItem={3}>
        {photos?.map((photo) => (
          <div key={photo.photo} className={style.carousel__photo}>
            <img src={photo.photo} alt="detail-house" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselPhoto;
