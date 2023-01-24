import React from 'react';
import { Logo } from '../../components';
import CartButton from '../../components/molecules/CartButton';

const Home = (): JSX.Element => {
  const items = [
    {
      slug: 'product-1',
      title: 'Product 1',
      imgUrl: 'https://via.placeholder.com/150',
      price: 100000,
      quantity: 1,
    },
    {
      slug: 'product-2',
      title: 'fresh care 1box 12 pcs - hijoasd',
      imgUrl: 'https://via.placeholder.com/150',
      price: 50000,
      quantity: 10,
    },
  ];
  return (
    <>
      <Logo />
      <div>
        <CartButton items={items} total={11} />
      </div>
    </>
  );
};

export default Home;
