import React from 'react';
import { Card, FormLabel, TextArea } from '../../../../atoms';
import style from './index.module.scss';
import { rules } from '../validation';
import { Radio } from 'antd';

const conditions = ['New', 'Used'];

const ProductDetails: React.FC = () => {
  return (
    <Card className={style.pd}>
      <h2 className={style.pd__title}>Product Details</h2>
      <FormLabel label="Condition" name="condition" rules={rules.condition}>
        <Radio.Group>
          {conditions.map((condition) => (
            <Radio key={condition} value={condition}>
              {condition}
            </Radio>
          ))}
        </Radio.Group>
      </FormLabel>
      <FormLabel
        label="Product Description"
        name="description"
        rules={rules.description}
      >
        <TextArea
          placeholder="Apple iPhone 12 Pro Max 256GB"
          showCount
          maxLength={500}
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
      </FormLabel>
    </Card>
  );
};

export default ProductDetails;
