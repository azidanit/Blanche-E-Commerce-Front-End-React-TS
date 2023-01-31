import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useGetProductsQuery } from '../../app/features/home/homeApiSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Filter, ListCardProduct, Pagination, SEO } from '../../components';
import Sort from './Sort';
import style from './index.module.scss';
import { IPanel } from './options';
import { isEmpty } from 'lodash';
import Price from './Price';
import Rating from './Rating';
import SellerLocation from './SellerLocation';
import Category from './Category';
import { Alert, PaginationProps, Skeleton } from 'antd';
import './override.scss';
import classNames from 'classnames';
import { setParams } from '../../app/features/home/paramsSlice';
import { capitalizeFirstLetter } from '../../helpers/capitalizeFirstLetter';
import ItemNotFound from '../../components/molecules/ItemNotFound';

const panels: IPanel[] = [
  {
    header: 'Seller Location',
    children: <SellerLocation />,
    key: 'location',
  },
  {
    header: 'Price',
    children: <Price />,
    key: 'price',
  },
  {
    header: 'Minimum Rating',
    children: <Rating />,
    key: 'rating',
  },
  {
    header: 'Categories',
    children: <Category />,
    key: 'category',
  },
];

const limit = 4;

const SearchResult: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useAppSelector((state) => state.params);
  const dispatch = useAppDispatch();
  const { data, isLoading, isError, error } = useGetProductsQuery(
    { ...params.search, limit },
    {
      skip: isEmpty(params.search),
    },
  );
  const onChange: PaginationProps['onChange'] = (page) => {
    dispatch(setParams({ page }));
    searchParams.set('page', page.toString());
    setSearchParams(searchParams);
  };

  return (
    <>
      <SEO
        title={
          data?.total_data
            ? `Result for ${searchParams.get('q') || 'all'}`
            : 'The Best Ecommerce Around'
        }
        description="Login page"
      />
      <div className={style.sr}>
        <div className={style.sr__left}>
          <p className={style.sr__title}>Filter</p>
          <Filter
            panels={panels}
            defaultActiveKey={panels.map((panel) => panel.key)}
            className={classNames(style.sr__filter, 'filter')}
            ghost
          />
        </div>
        <div className={style.sr__content}>
          <div className={style.sr__content__header}>
            <p className={style.sr__content__header__result}>
              {isLoading ? (
                <>Loading, please wait...</>
              ) : (
                <>
                  Showing {data?.total_data} results for{' '}
                  <span>{params.search.q || 'all'}</span>
                </>
              )}
            </p>
            {isError && (
              <Alert
                message={capitalizeFirstLetter((error as Error)?.message)}
                type="error"
                showIcon
                className={style.card__login__alert}
              />
            )}
            <Sort />
          </div>
          <Skeleton loading={isLoading}>
            {data?.total_data ? (
              <>
                <ListCardProduct data={data} />
                <div className={style.sr__content__pagination}>
                  {data.total_data > limit && (
                    <Pagination
                      onChange={onChange}
                      total={data.total_data}
                      showQuickJumper
                      pageSize={limit}
                      defaultCurrent={params.search.page}
                      className={style.sr__content__pagination__pagination}
                    />
                  )}
                </div>
              </>
            ) : (
              <ItemNotFound
                title="Sorry, your product is not found"
                body="Try to change your search keyword or remove some filters."
              />
            )}
          </Skeleton>
        </div>
      </div>
    </>
  );
};

export default SearchResult;
