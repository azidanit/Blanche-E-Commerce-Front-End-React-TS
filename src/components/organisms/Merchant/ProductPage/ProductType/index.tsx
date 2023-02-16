import React, { useState } from 'react';
import { Button, Card, FormLabel, InputNumber } from '../../../../atoms';
import ProductAttribute from '../ProductAttribute';
import ProductVariants from '../ProductVariants';
import { rules } from '../validation';
import style from './index.module.scss';

const ProductType: React.FC = () => {
  const [isVariant, setIsVariant] = useState(false);
  const onClick = () => {
    setIsVariant((prevValue) => !prevValue);
  };
  return (
    <Card className={style.pt}>
      <div className={style.pt__header}>
        <h2 className={style.pt__title}>Product Type</h2>
        <Button onClick={onClick} size="small">
          {isVariant ? 'Deactivate ' : 'Activate '}Variants
        </Button>
      </div>
      {isVariant ? <ProductVariants /> : <ProductAttribute />}
      <h3 className={style.pt__sub}>Dimension</h3>
      <div className={style.pt__dimension}>
        <FormLabel
          label="Length"
          name="length"
          rules={rules.stock}
          preserve={false}
        >
          <InputNumber
            className={style.pt__input}
            min={0}
            placeholder="ex: 100"
            addonAfter="cm"
          />
        </FormLabel>
        <FormLabel
          label="Width"
          name="width"
          rules={rules.stock}
          preserve={false}
        >
          <InputNumber
            className={style.pt__input}
            min={0}
            placeholder="ex: 100"
            addonAfter="cm"
          />
        </FormLabel>
        <FormLabel
          label="Height"
          name="height"
          rules={rules.stock}
          preserve={false}
        >
          <InputNumber
            className={style.pt__input}
            min={0}
            placeholder="ex: 100"
            addonAfter="cm"
          />
        </FormLabel>
      </div>
    </Card>
  );
};

export default ProductType;
