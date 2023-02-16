import React from 'react';
import style from './index.module.scss';
import { Button, Form } from '../../..';
import ProductInfo from './ProductInfo';
import ProductMedia from './ProductMedia';
import ProductDetails from './ProductDetails';
import { useForm } from 'antd/es/form/Form';
import ProductType from './ProductType';
import ProductShipping from './ProductShipping';

const ProductPage: React.FC = () => {
  const [form] = useForm();
  const onFinishForm = (values: any) => {
    console.log('form', values);
  };

  return (
    <div className={style.pp}>
      <Form
        name="basic"
        layout="vertical"
        autoComplete="off"
        onFinish={onFinishForm}
        form={form}
        className={style.pp__form}
      >
        <ProductMedia />
        <ProductInfo />
        <ProductDetails />
        <ProductType />
        <ProductShipping />
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
