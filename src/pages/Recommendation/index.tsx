import { Skeleton } from 'antd';
import React from 'react';
import { useGetRecommendationsQuery } from '../../app/features/home/homeApiSlice';
import { useAppSelector } from '../../app/hooks';
import { ListCardProduct, Pagination, SEO } from '../../components';
import style from './index.module.scss';

const limit = 20;

const Recommendation: React.FC = () => {
  const params = useAppSelector((state) => state.params);
  const { data, isLoading } = useGetRecommendationsQuery({
    limit,
    page: params.search.page || 1,
  });

  return (
    <>
      <SEO
        title="Check our recommendation for you"
        description="Recommendation page"
      />
      <div className={style.recommendation}>
        <h1 className={style.recommendation__title}>
          Our Recommendations for You
        </h1>
        <Skeleton loading={isLoading}>
          {data && (
            <>
              <ListCardProduct data={data} />
              <div className={style.recommendation__pagination}>
                {data.total_data > limit && (
                  <Pagination
                    total={data.total_data}
                    pageSize={limit}
                    className={style.recommendation__pagination__pagination}
                    showSizeChanger={false}
                    size="default"
                  />
                )}
              </div>
            </>
          )}
        </Skeleton>
      </div>
    </>
  );
};

export default Recommendation;
