import { PaginationProps, Skeleton } from 'antd';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { setParams } from '../../app/features/home/paramsSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ListCardProduct, Pagination } from '../../components';
import ItemNotFound from '../../components/molecules/ItemNotFound';
import { IGetProductListResponse } from '../../helpers/types';
import style from './index.module.scss';

interface ContentProps {
  data: IGetProductListResponse | undefined;
  isLoading: boolean;
  limit: number;
}

const Content: React.FC<ContentProps> = ({ data, isLoading, limit }) => {
  const params = useAppSelector((state) => state.params);
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const onChange: PaginationProps['onChange'] = (page) => {
    dispatch(setParams({ page }));
    searchParams.set('page', page.toString());
    setSearchParams(searchParams);
  };
  return (
    <Skeleton loading={isLoading}>
      {data?.total_data ? (
        <>
          <ListCardProduct data={data} />
          <div className={style.sr__content__pagination}>
            {data.total_data > limit && (
              <Pagination
                onChange={onChange}
                total={data.total_data}
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
  );
};

export default Content;
