import { PaginationProps, Skeleton } from 'antd';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { setParams } from '../../../app/features/home/paramsSlice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
  Alert,
  ListCardProduct,
  Pagination,
  SortProduct,
} from '../../../components';
import ItemNotFound from '../../../components/molecules/ItemNotFound';
import { capitalizeFirstLetter } from '../../../helpers/capitalizeFirstLetter';
import { IGetProductListResponse } from '../../../helpers/types';
import style from './index.module.scss';

interface ContentProps {
  isError: boolean;
  isLoading: boolean;
  error: Error;
  data: IGetProductListResponse | undefined;
  limit: number;
}

const Content: React.FC<ContentProps> = ({
  isError,
  isLoading,
  error,
  data,
  limit,
}) => {
  const params = useAppSelector((state) => state.params);
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const onChange: PaginationProps['onChange'] = (page) => {
    dispatch(setParams({ page }));
    searchParams.set('page', page.toString());
    setSearchParams(searchParams);
  };

  return (
    <div className={style.content}>
      {isError ? (
        <Alert
          message={capitalizeFirstLetter((error as Error)?.message)}
          type="error"
          showIcon
          className={style.alert}
        />
      ) : (
        <div className={style.content__header}>
          <p className={style.content__header__result}>
            {isLoading ? (
              <>Loading, please wait...</>
            ) : (
              <>
                Showing {data?.total_data} results for{' '}
                <span>{params.search.q || 'all'}</span>
              </>
            )}
          </p>
          <SortProduct />
        </div>
      )}
      <Skeleton loading={isLoading}>
        {!isError && data?.total_data ? (
          <>
            <ListCardProduct data={data} />
            <div className={style.content__pagination}>
              {data.total_data > limit && (
                <Pagination
                  onChange={onChange}
                  total={data.total_data}
                  pageSize={limit}
                  defaultCurrent={Number(params.search.page) || 1}
                  current={Number(params.search.page) || 1}
                  className={style.content__pagination__pagination}
                  showSizeChanger={false}
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
  );
};

export default Content;
