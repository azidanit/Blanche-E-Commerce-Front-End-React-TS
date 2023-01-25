import { RadioChangeEvent } from 'antd';
import React, { useState } from 'react';
import { RadioButtonGroup } from '../../../../molecules';
import style from './index.module.scss';
import { IVariantOption } from '../../../../../helpers/types';

interface ProductVariantItemProps {
  item: IVariantOption;
}

const ProductVariantItem: React.FC<ProductVariantItemProps> = ({ item }) => {
  const [value, setValue] = useState('red');

  const handleChange = (e: RadioChangeEvent) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  return (
    <div className={style.product__variant__item}>
      <p>{item.name}: </p>
      <RadioButtonGroup
        className={style.product__variant__item__radio}
        value={value}
        values={item.type}
        onChange={handleChange}
        size="large"
      />
    </div>
  );
};

export default ProductVariantItem;
