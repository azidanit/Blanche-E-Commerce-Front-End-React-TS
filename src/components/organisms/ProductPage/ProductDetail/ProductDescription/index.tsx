import { TabsProps } from 'antd';
import React from 'react';
import { Tabs } from '../../../../molecules';
import style from './index.module.scss';
import ProductDescriptionItem from './ProductDescriptionItem';
import ProductSpesification from './ProductSpesification';

const items: TabsProps['items'] = [
  {
    key: '1',
    label: `Description`,
    children: <ProductDescriptionItem />,
  },
  {
    key: '2',
    label: `Spesification`,
    children: <ProductSpesification />,
  },
];

const ProductDescription: React.FC = () => {
  return (
    <Tabs
      defaultActiveKey="1"
      items={items}
      className={style.product__description}
      size="middle"
    />
  );
};

export default ProductDescription;
