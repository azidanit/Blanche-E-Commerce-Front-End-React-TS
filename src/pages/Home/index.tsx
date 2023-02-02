import React from 'react';
import { CategorySlider, Recommended, SEO } from '../../components';
import style from './index.module.scss';

const Home: React.FC = () => {
  return (
    <>
      <SEO title="The Best Ecommerce Around" description="Home page" />
      <div className={style.home}>
        <CategorySlider />
        <Recommended />
      </div>
    </>
  );
};

export default Home;
