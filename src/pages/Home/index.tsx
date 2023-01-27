import React from 'react';
import { Nav, CategorySlider, SEO } from '../../components';
import HomeProductList from '../../components/organisms/HomeProductList';
import style from './index.module.scss';

const Home: React.FC = () => {
  return (
    <>
      <SEO title="The Best Ecommerce Around" description="Home page" />
      <Nav />
      <div className={style.home}>
        <CategorySlider />
        <HomeProductList />
      </div>
    </>
  );
};

export default Home;
