import React from 'react';
import { useGetRecommendationsQuery } from '../../app/features/home/homeApiSlice';
import { SEO } from '../../components';
import style from './index.module.scss';

const limit = 4;

const Recommendation: React.FC = () => {
  const { data, isLoading } = useGetRecommendationsQuery({ limit });
  return (
    <>
      <SEO
        title="Check our recommendation for you"
        description="Recommendation pagex"
      />
      <div className={style.recommendation}></div>
    </>
  );
};

export default Recommendation;
