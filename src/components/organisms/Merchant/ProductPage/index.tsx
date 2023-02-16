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
import ProductType from './ProductType';

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
        <ProductType />
        <div className={style.pp__action}>
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
          <Button htmlType="reset">Reset</Button>
        </div>
      </Form>
    </div>
  );
};

export default ProductPage;
