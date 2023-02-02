import { isEmpty } from 'lodash';
import { Key } from 'rc-tree-select/lib/interface';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { useGetProductsQuery } from '../../app/features/home/homeApiSlice';
import { setParams } from '../../app/features/home/paramsSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { FilterProduct, ProductContent, SEO } from '../../components';
import { capitalizeFirstLetter } from '../../helpers/capitalizeFirstLetter';
import { parseSearchParams } from '../../helpers/parseSearchParams';
import style from './index.module.scss';

const limit = 4;

const Category: React.FC = () => {
  const param = useParams();
  const location = useLocation();
  const params = useAppSelector((state) => state.params);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<undefined | string>(
    undefined,
  );
  const { data, isLoading, isError, error } = useGetProductsQuery(
    { ...params.search, limit },
    {
      skip: isEmpty(params.search),
    },
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    setSelectedCategory(param.category);
    dispatch(setParams({ cat: param.category }));
  }, []);

  useEffect(() => {
    dispatch(
      setParams({ ...parseSearchParams(searchParams), cat: param.category }),
    );
  }, [searchParams]);

  const onSelectCategory = (selectedKeysValue: Key[]) => {
    if (!selectedKeysValue.length) return;
    const cat = selectedKeysValue[0].toString();
    const url = location.pathname.split('/').slice(0, -1).join('/');
    navigate(`${url}/${cat}`);
    dispatch(setParams({ cat }));
    setSelectedCategory(cat);
  };

  return (
    <>
      <SEO
        title={`Get the best and newest ${capitalizeFirstLetter(
          param.category,
        )} items here`}
        description="Category Page"
      />
      <div className={style.category}>
        <div className={style.category__left}>
          <p className={style.category__title}>Filter</p>
          <FilterProduct
            onSelectCategory={onSelectCategory}
            selectedCategory={selectedCategory}
          />
        </div>
        <ProductContent
          data={data}
          isLoading={isLoading}
          isError={isError}
          error={error as Error}
          limit={limit}
        />
      </div>
    </>
  );
};

export default Category;
