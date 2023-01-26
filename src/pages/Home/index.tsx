import React from 'react';
import { useGetProductsQuery } from '../../app/features/home/homeApiSlice';
import { ListCardProduct, Nav, SEO } from '../../components';
import style from './index.module.scss';

const Home: React.FC = () => {
  const { data } = useGetProductsQuery({});
  return (
    <>
      <SEO title="The Best Ecommerce Around" description="Home page" />
      <Nav />
      <div className={style.home}>
        {data && <ListCardProduct data={data} />}
      </div>
    </>
  );
};

export default Home;
