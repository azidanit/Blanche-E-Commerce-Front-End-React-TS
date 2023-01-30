import { Breadcrumb, Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetCategoryAncestorsBySlugQuery } from '../../../../app/features/product/productApiSlice';
import { ICategoryItem } from '../../../../helpers/types';
import useProduct from '../../../../hooks/useProduct';
import style from './index.module.scss';

const BreadcrumbProduct: React.FC = () => {
  const { product } = useProduct();

  const [categories, setCategories] = useState<ICategoryItem | undefined>();

  const { data, isLoading } = useGetCategoryAncestorsBySlugQuery(
    product?.category?.url ? product?.category?.url : '',
    {
      skip: !product?.category?.url,
    },
  );

  useEffect(() => {
    setCategories(data);
  }, [data]);

  return (
    <Skeleton loading={isLoading}>
      <Breadcrumb className={style.breadcrumb}>
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        {categories?.name && (
          <Breadcrumb.Item>
            <Link to="/products">{categories?.name}</Link>
          </Breadcrumb.Item>
        )}

        {categories?.children?.[0]?.name && (
          <Breadcrumb.Item>{categories?.children?.[0]?.name}</Breadcrumb.Item>
        )}

        {categories?.children?.[0]?.children?.[0]?.name && (
          <Breadcrumb.Item>
            {categories?.children?.[0]?.children?.[0]?.name}
          </Breadcrumb.Item>
        )}
      </Breadcrumb>
    </Skeleton>
  );
};

export default BreadcrumbProduct;
