import React from 'react';
import { MdOutlineStorefront } from 'react-icons/md';
import DetailProduct from '../DetailProduct';
import style from './index.module.scss';

const list = [
  {
    id: 1,
    is_reviewed: false,
    invoice_id: 'INV/20230129/MPL/3008868972',
    total: 100000,
    status: 'delivered',
    merchant: {
      name: 'Matahari Mall',
      slug: 'matahari-mall',
    },
    issued_at: new Date(),
    product: {
      id: 1,
      url: 'https://images.tokopedia.net/img/cache/100-square/VqbcmM/2022/7/26/41a2ef36-1394-4549-ab4f-b0466541e2e0.jpg.webp?ect=4g',
      name: 'Baju',
      quantity: 2,
      price: 350000,
    },
  },
  {
    id: 2,
    is_reviewed: true,
    invoice_id: 'INV/20230130/MSC/3008868972',
    total: 100000,
    status: 'completed',
    merchant: {
      name: 'Matahari Mall',
      slug: 'matahari-mall',
    },
    issued_at: new Date(),
    product: {
      id: 1,
      url: 'https://images.tokopedia.net/img/cache/100-square/VqbcmM/2022/7/26/41a2ef36-1394-4549-ab4f-b0466541e2e0.jpg.webp?ect=4g',
      name: 'Baju Lama',
      quantity: 1,
      price: 100000,
    },
  },
];

const ProductDetails: React.FC = () => {
  return (
    <div className={style.pd}>
      <div className={style.pd__header}>
        <h3 className={style.pd__header__title}>Product Details</h3>
        <div className={style.pd__header__store}>
          <MdOutlineStorefront
            size={20}
            className={style.ct__header__store__icon}
          />
          <p className={style.pd__header__store__name}>Toko Ryan Daniel</p>
        </div>
      </div>
      <div className={style.pd__list}>
        {list.map((item) => (
          <DetailProduct transaction={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
