import { Cascader } from 'antd';
import React, { useEffect, useState } from 'react';
import { useGetCategoriesQuery } from '../../../../../app/features/home/homeApiSlice';
import { Card, FormLabel, Input, TextArea } from '../../../../atoms';
import { rules } from '../validation';
import style from './index.module.scss';

interface Option {
  label: string;
  value: string;
  children?: Option[];
}

const ProductInfo: React.FC = () => {
  const { data } = useGetCategoriesQuery({});
  const [categories, setCategories] = useState<Option[]>([]);

  useEffect(() => {
    if (!data) return;
    const newCategories = data.map((category) => ({
      label: category.name,
      value: category.id.toString(),
      children: category.children?.map((subCategory) => ({
        label: subCategory.name,
        value: subCategory.id.toString(),
        children: subCategory.children?.map((subSubCategory) => ({
          label: subSubCategory.name,
          value: subSubCategory.id.toString(),
        })),
      })),
    }));
    setCategories(newCategories);
  }, [data]);

  return (
    <Card className={style.pi}>
      <h2 className={style.pi__title}>Product Information</h2>
      <FormLabel label="Product Name" name="name" rules={rules.name}>
        <Input
          placeholder="ex: Apple iPhone 12 Pro Max 256GB"
          showCount
          maxLength={70}
          size="small"
        />
      </FormLabel>
      <FormLabel
        label="Product Category"
        name="category"
        rules={rules.category}
      >
        <Cascader placeholder="Choose category" options={categories} />
      </FormLabel>
    </Card>
  );
};

export default ProductInfo;
