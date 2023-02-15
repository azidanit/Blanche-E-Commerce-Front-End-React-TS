import React from 'react';
import style from './index.module.scss';
import { Button, Form, FormLabel, Input } from '../../..';
import { rules } from './validation';
import { InputNumber } from 'antd';
import ProductInfo from './ProductInfo';
import ProductMedia from './ProductMedia';
import ProductDetails from './ProductDetails';
import ProductVariants from './ProductVariants';
import { useForm } from 'antd/es/form/Form';

const ProductPage: React.FC = () => {
  const [form] = useForm();
  const onFinishForm = () => {};

  return (
    <div className={style.pp}>
      <Form
        name="basic"
        layout="vertical"
        autoComplete="off"
        onFinish={onFinishForm}
        form={form}
      >
        <ProductMedia />
        <ProductInfo />
        <ProductDetails />
        <ProductVariants />
        <FormLabel label="Price" name="price" rules={rules.price}>
          <InputNumber placeholder="ex: 1000000" />
        </FormLabel>
        <FormLabel label="Stock" name="stock" rules={rules.stock}>
          <InputNumber placeholder="ex: 100" />
        </FormLabel>
        <FormLabel label="SKU" name="sku" rules={rules.sku}>
          <Input placeholder="ex: 123456789" />
        </FormLabel>
        <Button htmlType="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default ProductPage;
