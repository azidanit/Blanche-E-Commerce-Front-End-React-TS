import { RadioChangeEvent } from 'antd';
import React, { useState } from 'react';
import { RadioButtonGroup } from '../../../../molecules';
import style from './index.module.scss';

const ProductVariantItem: React.FC = () => {
  const [value, setValue] = useState('red');

  const handleChange = (e: RadioChangeEvent) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  return (
    <div className={style.product__variant__item}>
      <p>Variant: </p>
      <RadioButtonGroup
        className={style.product__variant__item__radio}
        value={value}
        values={['red', 'black']}
        onChange={handleChange}
        size="large"
      />
    </div>
  );
};

export default ProductVariantItem;
