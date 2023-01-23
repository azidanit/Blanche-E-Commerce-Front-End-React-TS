import React from 'react';
import { Logo } from '../../components';
import CartButton from '../../components/molecules/CartButton';

const Home = (): JSX.Element => {
  const items = [
    {
      slug: 'product-1',
      title: 'Product 1',
      imgUrl: 'https://via.placeholder.com/150',
      price: 100,
      quantity: 1,
    },
    {
      slug: 'product-2',
      title: 'Product 2',
      imgUrl: 'https://via.placeholder.com/150',
      price: 500,
      quantity: 10,
    },
  ];
  return (
    <>
      <Logo />
      <CartButton items={items} total={1} />
    </>
  );
};

export default Home;
