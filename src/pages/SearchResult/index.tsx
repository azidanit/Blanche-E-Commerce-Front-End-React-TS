import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { ProductContent, SEO } from '../../components';
import { FilterProduct } from '../../components';
import style from './index.module.scss';
import { isEmpty } from 'lodash';
import { useGetProductsQuery } from '../../app/features/home/homeApiSlice';
import { useSearchParams } from 'react-router-dom';
import { Key } from 'rc-tree-select/lib/interface';

const limit = 4;

const SearchResult: React.FC = () => {
  const params = useAppSelector((state) => state.params);
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, isLoading, isError, error } = useGetProductsQuery(
    { ...params.search, limit },
    {
      skip: isEmpty(params.search),
    },
  );

  const onSelectCategory = (selectedKeysValue: Key[]) => {
    searchParams.delete('page');
    if (!selectedKeysValue.length) {
      searchParams.delete('cat');
      setSearchParams(searchParams);
      return;
    }
    const cat = selectedKeysValue[0].toString();
    searchParams.set('cat', cat);
    setSearchParams(searchParams);
  };

  return (
    <>
      <SEO
        title={
          params.search.q
            ? `Result for ${params.search.q || 'all'}`
            : 'The Best Ecommerce Around'
        }
        description="Search page"
      />
      <div className={style.sr}>
        <div className={style.sr__left}>
          <p className={style.sr__title}>Filter</p>
          <FilterProduct
            onSelectCategory={onSelectCategory}
            selectedCategory={params.search.cat}
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

export default SearchResult;
